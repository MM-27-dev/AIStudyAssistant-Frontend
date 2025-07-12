// import React, { useState } from "react";
// import { Paperclip, Mic, Send } from "lucide-react";
// import { AuthService } from "../../Services/authServices";

// export default function ChatInput({ onSendMessage, sessionId, setSessionId }) {
//   const [message, setMessage] = useState("");

//   // Handle message send
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!message.trim()) return;

//   //   try {
//   //     let currentSessionId = sessionId;

//   //     // If no session ID, create a new session
//   //     if (!currentSessionId) {
//   //       const sessionRes = await AuthService.createSession({
//   //         title: "New Chat Session",
//   //       });
//   //       currentSessionId = sessionRes.data._id;
//   //       sessionStorage.setItem("chatSessionId", currentSessionId);
//   //       setSessionId(currentSessionId);
//   //     }

//   //     // Format timestamp
//   //     const timestamp = new Date().toLocaleTimeString([], {
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //     });

//   //     // Add user message to chat window
//   //     const userMessage = {
//   //       text: message,
//   //       type: "user",
//   //       timestamp,
//   //     };
//   //     onSendMessage(userMessage);

//   //     // Store original message text and clear input
//   //     const messageContent = message;
//   //     setMessage("");

//   //     // Send message to server and get AI response
//   //     const response = await AuthService.sendMessageToSession(
//   //       currentSessionId,
//   //       {
//   //         content: messageContent,
//   //         isUser: true,
//   //         messageType: "text",
//   //       }
//   //     );

//   //     const aiMessage = response.data.aiMessage;

//   //     if (aiMessage) {
//   //       const botMessage = {
//   //         text: aiMessage.content,
//   //         type: "bot",
//   //         timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
//   //           hour: "2-digit",
//   //           minute: "2-digit",
//   //         }),
//   //         isLoading: false,
//   //       };

//   //       // Replace temporary loading message with actual response
//   //       onSendMessage(botMessage, true);
//   //     }
//   //   } catch (err) {
//   //     console.error("Chat error:", err);
//   //     // Optional: show an error in UI or log it
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!message.trim()) return;

//   //   try {
//   //     let currentSessionId = sessionId; // Start with the sessionId from props

//   //     // ✅ Create new session if not available
//   //     if (!currentSessionId) {
//   //       console.log("No sessionId found, creating a new session...");
//   //       const sessionRes = await AuthService.createSession({
//   //         title: "New Chat Session",
//   //       });

//   //       // currentSessionId = sessionRes.data._id;

//   //       currentSessionId = sessionRes.data.data._id;

//   //     console.log("API session _id:", sessionRes?.data?.data?._id);
//   //     console.log("Setting sessionId in sessionStorage:", currentSessionId);

//   //       // ✅ Save session locally and notify parent (ChatPage)
//   //       setSessionId(currentSessionId); // Update ChatPage's sessionId state
//   //       sessionStorage.setItem("chatSessionId", currentSessionId);
//   //     }

//   //     // Format timestamp
//   //     const timestamp = new Date().toLocaleTimeString([], {
//   //       hour: "2-digit",
//   //       minute: "2-digit",
//   //     });

//   //     // Add user message to chat window
//   //     const userMessage = {
//   //       text: message,
//   //       type: "user",
//   //       timestamp,
//   //     };
//   //     onSendMessage(userMessage); // Notify ChatPage to add user message

//   //     // Store original message text and clear input
//   //     const messageContent = message;
//   //     setMessage("");

//   //     // ✅ Send message with the correct session ID
//   //     const response = await AuthService.sendMessageToSession(
//   //       currentSessionId, // Use the potentially newly created session ID
//   //       {
//   //         content: messageContent,
//   //         isUser: true,
//   //         messageType: "text",
//   //       }
//   //     );

//   //     const aiMessage = response.data.aiMessage;

//   //     if (aiMessage) {
//   //       const botMessage = {
//   //         text: aiMessage.content,
//   //         type: "bot",
//   //         timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
//   //           hour: "2-digit",
//   //           minute: "2-digit",
//   //         }),
//   //         isLoading: false,
//   //       };

//   //       onSendMessage(botMessage, true); // Notify ChatPage to add bot message
//   //     }
//   //   } catch (err) {
//   //     console.error("Chat error:", err);
//   //     // Optional: show an error in UI or log it
//   //   }
//   // };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!message.trim()) return;

//     try {
//       let currentSessionId = sessionId;

//       if (!currentSessionId) {
//         const sessionRes = await AuthService.createSession({
//           title: "New Chat Session",
//         });
//         currentSessionId = sessionRes.data.data._id;

//         // Wait for parent to sync sessionId before continuing
//         setSessionId(currentSessionId);
//         sessionStorage.setItem("chatSessionId", currentSessionId);
//       }

//       // Wait one tick to let parent re-render (optional safety)
//       await new Promise((r) => setTimeout(r, 50));

//       // Now send the user message
//       const timestamp = new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });

//       const userMessage = {
//         text: message,
//         type: "user",
//         timestamp,
//       };
//       onSendMessage(userMessage);
//       setMessage("");

//       const response = await AuthService.sendMessageToSession(
//         currentSessionId,
//         {
//           content: message,
//           isUser: true,
//           messageType: "text",
//         }
//       );

//       const aiMessage = response.data.aiMessage;

//       if (aiMessage) {
//         const botMessage = {
//           text: aiMessage.content,
//           type: "bot",
//           timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//           isLoading: false,
//         };

//         onSendMessage(botMessage, true);
//       }
//     } catch (err) {
//       console.error("Chat error:", err);
//     }
//   };
  
  

//   return (
//     <div className="border-t border-[#33334A] py-2 px-4">
//       <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//         {/* Chat input field */}
//         <div className="relative bg-[#1B1B2B] rounded-xl border border-[#33334A] focus-within:border-[#33334A] transition-colors">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Enter a prompt here"
//             className="w-full bg-transparent pl-5 pr-32 py-3 text-[#CCCCCC] placeholder-[#888899] focus:outline-none text-sm sm:text-base font-poppins"
//           />

//           {/* Action buttons: attach, mic, send */}
//           <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
//             <button
//               type="button"
//               className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
//             >
//               <Paperclip className="w-5 h-5 text-[#888899]" />
//             </button>

//             <button
//               type="button"
//               className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
//             >
//               <Mic className="w-5 h-5 text-[#888899]" />
//             </button>

//             <button
//               type="submit"
//               disabled={!message.trim()}
//               className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
//             >
//               <Send className="w-5 h-5 text-white" />
//             </button>
//           </div>
//         </div>

//         {/* Footer note */}
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

import React, { useState } from "react";
import { Paperclip, Mic, Send } from "lucide-react";
import { AuthService } from "../../Services/authServices";

export default function ChatInput({ onSendMessage, sessionId }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  // Handle message send
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!message.trim()) return;

  //   try {
  //     let currentSessionId = sessionId;

  //     // If no session ID, create a new session
  //     if (!currentSessionId) {
  //       const sessionRes = await AuthService.createSession({
  //         title: "New Chat Session",
  //       });
  //       currentSessionId = sessionRes.data._id;
  //       sessionStorage.setItem("chatSessionId", currentSessionId);
  //     }

  //     // Format timestamp
  //     const timestamp = new Date().toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     });

  //     // Add user message to chat window
  //     const userMessage = {
  //       text: message,
  //       type: "user",
  //       timestamp,
  //     };
  //     onSendMessage(userMessage);

  //     // Store original message text and clear input
  //     const messageContent = message;
  //     setMessage("");

  //     // Send message to server and get AI response
  //     const response = await AuthService.sendMessageToSession(
  //       currentSessionId,
  //       {
  //         content: messageContent,
  //         isUser: true,
  //         messageType: "text",
  //       }
  //     );

  //     const aiMessage = response.data.aiMessage;

  //     if (aiMessage) {
  //       const botMessage = {
  //         text: aiMessage.content,
  //         type: "bot",
  //         timestamp: new Date(aiMessage.createdAt).toLocaleTimeString([], {
  //           hour: "2-digit",
  //           minute: "2-digit",
  //         }),
  //         isLoading: false,
  //       };

  //       // Replace temporary loading message with actual response
  //       onSendMessage(botMessage, true);
  //     }
  //   } catch (err) {
  //     console.error("Chat error:", err);
  //     // Optional: show an error in UI or log it
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !file) return;

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

      // const userMessage = {
      //   text: message || (file ? file.name : ""),
      //   type: "user",
      //   timestamp,
      // };
      // onSendMessage(userMessage);
      const userMessage = {
        text: message || (file ? file.name : ""),
        type: "user",
        timestamp,
        messageType: file ? "file" : "text",
        file: file
          ? {
              originalName: file.name,
              filename: file.name, // or actual one returned by server
            }
          : null,
      };
      onSendMessage(userMessage);

      setMessage("");

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
          };
          onSendMessage(botMessage, true);
        }

        setFile(null);
      } else {
        // Handle text message only
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
          };
          onSendMessage(botMessage, true);
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    <div className="border-t border-[#33334A] py-2 px-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        {/* Chat input field */}
        <div className="relative bg-[#1B1B2B] rounded-xl border border-[#33334A] focus-within:border-[#33334A] transition-colors">
          {/* <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a prompt here"
            className="w-full bg-transparent pl-5 pr-32 py-3 text-[#CCCCCC] placeholder-[#888899] focus:outline-none text-sm sm:text-base font-poppins"
          /> */}

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

          {/* Action buttons: attach, mic, send */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {/* <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Paperclip className="w-5 h-5 text-[#888899]" />
            </button> */}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="file-upload"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <Paperclip className="w-5 h-5 text-[#888899]" />
            </label>

            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mic className="w-5 h-5 text-[#888899]" />
            </button>

            <button
              type="submit"
              disabled={!message.trim()}
              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Footer note */}
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
