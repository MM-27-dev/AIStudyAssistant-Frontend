// // ChatInput.jsx
// import React, { useState, useRef } from "react";
// import { Paperclip, Send } from "lucide-react";
// import { AuthService } from "../../Services/authServices";
// import VoiceAgent from "./VoiceAgent";

// export default function ChatInput({ onSendMessage, sessionId, setMessages }) {
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const voiceAgentRef = useRef(null); // Ref to the VoiceAgent component

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // IMPORTANT: Prevent default form submission

//     if (voiceAgentRef.current && voiceAgentRef.current.isCallActive()) {
//       voiceAgentRef.current.toggleCall(); // Turn off mic
//     }

//     if (!message.trim() && !file) {
//       console.log("No message or file to send.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       let currentSessionId = sessionId;

//       if (!currentSessionId) {
//         const sessionRes = await AuthService.createSession({
//           title: "New Chat Session",
//         });
//         currentSessionId = sessionRes.data._id;
//         sessionStorage.setItem("chatSessionId", currentSessionId);
//       }

//       const timestamp = new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });

//       const userMessage = {
//         text: message || (file ? file.name : ""),
//         type: "user",
//         timestamp,
//         messageType: file ? "file" : "text",
//         file: file
//           ? {
//               originalName: file.name,
//               filename: file.name,
//             }
//           : null,
//       };
//       onSendMessage(userMessage);
//       setMessage("");
//       if (file) {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("message", message);

//         const response = await AuthService.sendFileMessage(
//           currentSessionId,
//           formData
//         );

//         const aiMessage = response.data.aiMessage;
//         if (aiMessage) {
//           const botMessage = {
//             text: aiMessage.content,
//             type: "bot",
//             timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             isLoading: false,
//           };
//           onSendMessage(botMessage, true);
//         }

//         setFile(null);
//       } else {
//         const response = await AuthService.sendMessageToSession(
//           currentSessionId,
//           {
//             content: message,
//             isUser: true,
//             messageType: "text",
//           }
//         );

//         const aiMessage = response.data.aiMessage;
//         if (aiMessage) {
//           const botMessage = {
//             text: aiMessage.content,
//             type: "bot",
//             timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//             isLoading: false,
//           };
//           onSendMessage(botMessage, true);
//         }
//       }
//     } catch (err) {
//       console.error("Chat error:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="border-t border-[#33334A] py-2 px-4">
//       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//         <div className="relative bg-[#1B1B2B] rounded-xl border border-[#33334A] focus-within:border-[#33334A] transition-colors">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyPress={(e) => {
//               if (e.key === "Enter" && !e.shiftKey) {
//                 // Allow Shift+Enter for new line
//                 e.preventDefault(); // Prevent default form submission
//                 handleSubmit(e); // Manually call handleSubmit
//               }
//             }}
//             placeholder="Enter a prompt here"
//             className="w-full bg-transparent pl-5 pr-32 py-3 text-[#CCCCCC] placeholder-[#888899] focus:outline-none text-sm sm:text-base font-poppins"
//           />

//           <input
//             type="file"
//             id="file-upload"
//             className="hidden"
//             onChange={(e) => {
//               const selectedFile = e.target.files[0];
//               setFile(selectedFile);
//               if (!message.trim()) {
//                 setMessage(`Attached file: ${selectedFile.name}`);
//               }
//             }}
//           />

//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
//             <label
//               htmlFor="file-upload"
//               className="p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
//             >
//               <Paperclip className="w-5 h-5 text-[#888899]" />
//             </label>

//             <div className="mt-3 flex justify-center">
//               {/* Pass ref to VoiceAgent */}
//               <VoiceAgent
//                 ref={voiceAgentRef}
//                 setMessages={setMessages}
//                 prompt="You're a helpful assistant"
//               />
//             </div>

//             <button
//               type="submit" // This button explicitly submits the form
//               disabled={(!message.trim() && !file) || isSubmitting}
//               className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
//             >
//               <Send className="w-5 h-5 text-white" />
//             </button>
//           </div>
//         </div>

//         <p className="text-center mt-4 text-xs text-[#888899] font-poppins">
//           Free Research Preview. Bot Buzz may produce inaccurate information
//           about people, places, or facts.{" "}
//           <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
//             BotBuzz Version 2.0
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }


// ChatInput.jsx
import React, { useState, useRef } from "react";
import { Paperclip, Send } from "lucide-react";
import { AuthService } from "../../Services/authServices";
import VoiceAgent from "./VoiceAgent";

export default function ChatInput({ onSendMessage, sessionId, setMessages }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const voiceAgentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (voiceAgentRef.current && voiceAgentRef.current.isCallActive()) {
      voiceAgentRef.current.toggleCall();
    }

    if (!message.trim() && !file) {
      console.log("No message or file to send.");
      return;
    }

    setIsSubmitting(true);

    try {
      let currentSessionId = sessionId;

      if (!currentSessionId) {
        const sessionRes = await AuthService.createSession({ title: "New Chat Session" });
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
      setMessage("");

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("message", message);

        const response = await AuthService.sendFileMessage(currentSessionId, formData);
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
          };
          onSendMessage(botMessage, true);
        }

        setFile(null);
      } else {
        const response = await AuthService.sendMessageToSession(currentSessionId, {
          content: message,
          isUser: true,
          messageType: "text",
        });

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
          };
          onSendMessage(botMessage, true);
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsSubmitting(false);
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

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <label
              htmlFor="file-upload"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Paperclip className="w-5 h-5 text-[#888899]" />
            </label>

            <div className="mt-3 flex justify-center">
              <VoiceAgent
                ref={voiceAgentRef}
                setMessages={setMessages}
                prompt="You're a helpful assistant"
                sessionId={sessionId}
                onSendMessage={onSendMessage}
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
          Free Research Preview. Bot Buzz may produce inaccurate information about people, places, or facts.{" "}
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer">BotBuzz Version 2.0</span>
        </p>
      </form>
    </div>
  );
}
