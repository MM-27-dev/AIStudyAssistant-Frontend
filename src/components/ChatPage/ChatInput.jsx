import React, { useRef, useState } from "react";
import { Paperclip, Send } from "lucide-react";
import { AuthService } from "../../Services/authServices";
import VoiceAgent from "./VoiceAgent";
import { pdfToText } from "../../utils/fileExtracter";

export default function ChatInput({
  onSendMessage,
  sessionId,
  setMessages,
  setShowTyping,
}) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState("text");
  const dataChannelRef = useRef(null);
  const pendingInstructionsRef = useRef([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(mode, "===========>");

    // ✅ Voice mode handling
    if (mode === "voice") {
      // If file exists in voice mode → handle file upload
      if (file) {
        try {
          const extractedText = await pdfToText(file);
          const truncatedText = extractedText.slice(0, 4000);

          const timestamp = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          const newMessage = {
            id: Date.now().toString(),
            text: `Uploaded file: ${file.name}`,
            type: "user",
            timestamp,
            messageType: "voice-file",
            file: {
              originalName: file.name,
              filename: file.name,
            },
          };

          onSendMessage(newMessage);

          // Build instruction packet for the realtime API
          const instruction = JSON.stringify({
            type: "session.update",
            session: {
              instructions: `The user uploaded a file named "${file.name}". Please use the following content as context:\n\n${truncatedText}`,
            },
          });

          // Send immediately if dataChannel open, else queue it
          if (
            dataChannelRef.current &&
            dataChannelRef.current.readyState === "open"
          ) {
            dataChannelRef.current.send(instruction);
          } else {
            pendingInstructionsRef.current.push(instruction);
          }

          // Save in DB
          try {
            setShowTyping(true);
            await AuthService.saveMessageToSession(sessionId, {
              content: truncatedText,
              isUser: true,
              messageType: "voice-file",
              file: {
                originalName: file.name,
                filename: file.name,
              },
            });
          } catch (err) {
            console.error("Error saving voice file message:", err);
          } finally {
            setShowTyping(false);
          }

          setFile(null);
          setMessage("");
          return;
        } catch (error) {
          console.log("Error parsing pdf and uploading file ", error);
        }
      }

      // Else → handle normal voice text message
      if (!message.trim()) return;

      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newMessage = {
        id: Date.now().toString(),
        text: message,
        type: "user",
        timestamp,
        messageType: "voice",
      };

      onSendMessage(newMessage);

      // Build instruction packet for the realtime API
      const instruction = JSON.stringify({
        type: "response.create",
        response: {
          instructions: message.trim(),
        },
      });

      // Send immediately if dataChannel open, else queue it
      if (
        dataChannelRef.current &&
        dataChannelRef.current.readyState === "open"
      ) {
        dataChannelRef.current.send(instruction);
      } else {
        pendingInstructionsRef.current.push(instruction);
      }

      // Save in DB
      try {
        setShowTyping(true);
        await AuthService.saveMessageToSession(sessionId, {
          content: message,
          isUser: true,
          messageType: "voice",
        });
      } catch (err) {
        console.error("Error saving voice text message:", err);
      } finally {
        setShowTyping(false);
      }

      setMessage("");
      return;
    }

    // ✅ Text / File handling (unchanged)
    setShowTyping(true);

    if (!message.trim() && !file) {
      console.log("No message or file to send.");
      return;
    }

    setIsSubmitting(true);

    try {
      let currentSessionId = sessionId;

      if (!currentSessionId) {
        const sessionRes = await AuthService.createSession({
          title: "New Chat Session",
        });
        currentSessionId = sessionRes.data._id;
        sessionStorage.setItem("chatSessionId", currentSessionId);
      }

      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const userMessage = {
        text: message || (file ? file.name : ""),
        type: "user",
        timestamp,
        messageType: file ? "file" : "text",
        file: file
          ? {
              originalName: file.name,
              filename: file.name,
            }
          : null,
      };

      onSendMessage(userMessage);

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", message);

        const response = await AuthService.sendFileMessage(
          currentSessionId,
          formData
        );
        const aiMessage = response.data.aiMessage;

        if (aiMessage) {
          const botMessage = {
            text: aiMessage.content,
            type: "bot",
            timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isLoading: false,
            messageType: "file",
          };
          onSendMessage(botMessage, true);
        }

        setFile(null);
        setMessage("");
      } else {
        const response = await AuthService.sendMessageToSession(
          currentSessionId,
          {
            content: message,
            isUser: true,
            messageType: "text",
          }
        );

        const aiMessage = response.data.aiMessage;

        if (aiMessage) {
          const botMessage = {
            text: aiMessage.content,
            type: "bot",
            timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            isLoading: false,
            messageType: "text",
          };
          onSendMessage(botMessage, true);
        }
        setMessage("");
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsSubmitting(false);
      setShowTyping(false);
    }
  };

  return (
    <div className="border-t border-[#33334A] py-2 px-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative bg-[#1B1B2B] rounded-xl border border-[#33334A] focus-within:border-[#33334A] transition-colors">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Enter a prompt here"
            className="w-full bg-transparent pl-5 pr-32 py-3 text-[#CCCCCC] placeholder-[#888899] focus:outline-none text-sm sm:text-base font-poppins"
          />

          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              setFile(selectedFile);
              if (!message.trim()) {
                setMessage(`Attached file: ${selectedFile.name}`);
              }
            }}
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center gap-2">
            <label
              htmlFor="file-upload"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Paperclip className="w-5 h-5 text-[#888899]" />
            </label>

            <div className="flex justify-center items-center">
              <VoiceAgent
                setMode={setMode}
                setMessages={setMessages}
                prompt="You're a helpful assistant"
                sessionId={sessionId}
                setShowTyping={setShowTyping}
                dataChannelRef={dataChannelRef}
                pendingInstructionsRef={pendingInstructionsRef} // ✅ pass down
              />
            </div>

            <button
              type="submit"
              disabled={(!message.trim() && !file) || isSubmitting}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <p className="text-center mt-4 text-xs text-[#888899] font-poppins">
          Free Research Preview. Bot Buzz may produce inaccurate information
          about people, places, or facts.{" "}
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
            BotBuzz Version 2.0
          </span>
        </p>
      </form>
    </div>
  );
}
