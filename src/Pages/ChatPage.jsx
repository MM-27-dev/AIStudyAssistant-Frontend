// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import InitialSuggestions from "../components/ChatPage/InitialSuggestions";
// import ChatWindow from "../components/ChatPage/ChatWindow";
// import ChatInput from "../components/ChatPage/ChatInput";

// function ChatPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const newChat = searchParams.get("newChat") === "true";

//   const [hasStartedChat, setHasStartedChat] = useState(false);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (newChat) {
//       setMessages([
//         {
//           text: "Hello! How can I help you today?",
//           type: "bot",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);
//       setHasStartedChat(true);

//       // ✅ Clear query param after showing welcome
//       setSearchParams({});
//     }
//   }, [newChat, setSearchParams]);

//   const handleSendMessage = (messageObj) => {
//     setMessages((prev) => [...prev, messageObj]);
//     if (!hasStartedChat) setHasStartedChat(true);
//   };

//   return (
//     <div className="h-full bg-[#0E0E1B] flex text-base font-poppins overflow-hidden">
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1">
//           {!hasStartedChat ? (
//             <InitialSuggestions />
//           ) : (
//             <ChatWindow messages={messages} />
//           )}
//         </div>
//         <ChatInput onSendMessage={handleSendMessage} />
//       </div>
//     </div>
//   );
// }

// export default ChatPage;

// // import React, { useState, useEffect } from "react";
// // import InitialSuggestions from "../components/ChatPage/InitialSuggestions";
// // import ChatWindow from "../components/ChatPage/ChatWindow";
// // import ChatInput from "../components/ChatPage/ChatInput";
// // import { useSearchParams } from "react-router-dom";
// // import { AuthService } from "../Services/authServices";
// // // import { AuthService } from "../../Services/authServices";

// // function ChatPage() {
// //   const [hasStartedChat, setHasStartedChat] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   // const location = useLocation();
// //   // const showWelcome = location.state?.showWelcome;
// //   // const sessionId = sessionStorage.getItem("chatSessionId");
// //   // const [searchParams] = useSearchParams(); // ✅ Add this line
// //   // const isNewChat = searchParams.get("newChat") === "true";

// //   const [searchParams] = useSearchParams();
// //   const isNewChat = searchParams.get("newChat") === "true";
// //   const querySessionId = searchParams.get("sessionId");

// //   // const sessionId = querySessionId || sessionStorage.getItem("chatSessionId");
// //   // const [sessionId, setSessionId] = useState(
// //   //   querySessionId || sessionStorage.getItem("chatSessionId")
// //   // );

// //   const [sessionId, setSessionId] = useState(null);

// //   useEffect(() => {
// //     const storedId = querySessionId || sessionStorage.getItem("chatSessionId");
// //     if (storedId) {
// //       setSessionId(storedId);
// //     }
// //   }, [querySessionId]);



// //   useEffect(() => {
// //     if (querySessionId) {
// //       sessionStorage.setItem("chatSessionId", querySessionId);
// //     }
// //   }, [querySessionId]);

// //   useEffect(() => {
// //     if (sessionId) {
// //       AuthService.getSessionMessages(sessionId)
// //         .then((response) => {
// //           const fetchedMessages = response.data;
// //           console.log("Fetched messages:", fetchedMessages);

// //           if (fetchedMessages.length === 0 && isNewChat) {
// //             // ✅ Show welcome message for new chat with no history
// //             const welcomeMsg = {
// //               text: "Hello! How can I help you today?",
// //               type: "bot",
// //               timestamp: new Date().toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit",
// //               }),
// //             };
// //             setMessages([welcomeMsg]);
// //             setHasStartedChat(true);
// //             return;
// //           }

// //           const formattedMessages = fetchedMessages.map((msg) => ({
// //             text: msg.content,
// //             type: msg.role === "user" ? "user" : "bot",
// //             timestamp: new Date().toLocaleTimeString([], {
// //               hour: "2-digit",
// //               minute: "2-digit",
// //             }),
// //           }));

// //           setMessages(formattedMessages);
// //           if (formattedMessages.length > 0) setHasStartedChat(true);
// //         })
// //         .catch((error) => {
// //           console.error("❌ Failed to fetch messages:", error);
// //         });
// //     }
// //   }, [sessionId, isNewChat]);

// //   const handleSendMessage = (messageObj) => {
// //     setMessages((prev) => [...prev, messageObj]);
// //     if (!hasStartedChat) setHasStartedChat(true);
// //   };

// //   return (
// //     <div className="h-full bg-[#0E0E1B] flex text-base font-poppins overflow-hidden">
// //       <div className="flex-1 flex flex-col">
// //         <div className="flex-1">
// //           {!hasStartedChat ? (
// //             <InitialSuggestions />
// //           ) : (
// //             <ChatWindow messages={messages} />
// //           )}
// //         </div>
// //         {/* <ChatInput onSendMessage={handleSendMessage} /> */}
// //         <ChatInput
// //           onSendMessage={handleSendMessage}
// //           sessionId={sessionId}
// //           setSessionId={setSessionId}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatPage;

// import React, { useState, useEffect } from "react";
// import InitialSuggestions from "../components/ChatPage/InitialSuggestions";
// import ChatWindow from "../components/ChatPage/ChatWindow";
// import ChatInput from "../components/ChatPage/ChatInput";
// import { useSearchParams } from "react-router-dom";
// import { AuthService } from "../Services/authServices";

// function ChatPage() {
//   const [hasStartedChat, setHasStartedChat] = useState(false);
//   const [messages, setMessages] = useState([]);

//   const [searchParams] = useSearchParams();
//   const isNewChat = searchParams.get("newChat") === "true";
//   const querySessionId = searchParams.get("sessionId");

//   const sessionId = querySessionId || sessionStorage.getItem("chatSessionId");

//   useEffect(() => {
//     if (querySessionId) {
//       sessionStorage.setItem("chatSessionId", querySessionId);
//     }
//   }, [querySessionId]);

//   useEffect(() => {
//     if (sessionId) {
//       AuthService.getSessionMessages(sessionId)
//         .then((response) => {
//           const fetchedMessages = response.data;

//           if (fetchedMessages.length === 0 && isNewChat) {
//             // ✅ Show welcome message for new chat with no history
//             const welcomeMsg = {
//               text: "Hello! How can I help you today?",
//               type: "bot",
//               timestamp: new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               }),
//             };
//             setMessages([welcomeMsg]);
//             setHasStartedChat(true);
//             return;
//           }
   

//           const formattedMessages = fetchedMessages.map((msg) => ({
//             text: msg.content,
//             type: msg.isUser ? "user" : "bot", // ✅ Use isUser directly
//             timestamp: new Date(msg.createdAt).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           }));
          
//           setMessages(formattedMessages);
//           if (formattedMessages.length > 0) setHasStartedChat(true);
//         })
//         .catch((error) => {
//           console.error("❌ Failed to fetch messages:", error);
//         });
//     }
//   }, [sessionId, isNewChat]);

//   const handleSendMessage = (messageObj) => {
//     setMessages((prev) => [...prev, messageObj]);
//     if (!hasStartedChat) setHasStartedChat(true);
//   };

//   return (
//     <div className="h-full bg-[#0E0E1B] flex text-base font-poppins overflow-hidden">
//       <div className="flex-1 flex flex-col">
//         <div className="flex-1">
//           {!hasStartedChat ? (
//             <InitialSuggestions />
//           ) : (
//             <ChatWindow messages={messages} />
//           )}
//         </div>
//         {/* <ChatInput onSendMessage={handleSendMessage} /> */}
//         <ChatInput onSendMessage={handleSendMessage} sessionId={sessionId} />
//       </div>
//     </div>
//   );
// }

// export default ChatPage;

import React, { useState, useEffect } from "react";
import InitialSuggestions from "../components/ChatPage/InitialSuggestions";
import ChatWindow from "../components/ChatPage/ChatWindow";
import ChatInput from "../components/ChatPage/ChatInput";
import { useSearchParams } from "react-router-dom";
import { AuthService } from "../Services/authServices";

function ChatPage() {
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const [searchParams] = useSearchParams();
  const isNewChat = searchParams.get("newChat") === "true";
  const querySessionId = searchParams.get("sessionId");

  const sessionId = querySessionId || sessionStorage.getItem("chatSessionId");

  useEffect(() => {
    if (querySessionId) {
      sessionStorage.setItem("chatSessionId", querySessionId);
    }
  }, [querySessionId]);

  useEffect(() => {
    if (!sessionId) return;

    AuthService.getSessionMessages(sessionId)
      .then((response) => {
        const fetchedMessages = response.data;

        // ✅ Only show welcome if this session is new AND hasn't been welcomed
        const alreadyWelcomed = sessionStorage.getItem("welcomedSessionId");

        if (
          fetchedMessages.length === 0 &&
          isNewChat &&
          alreadyWelcomed !== sessionId
        ) {
          const welcomeMsg = {
            text: "Hello! How can I help you today?",
            type: "bot",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages([welcomeMsg]);
          setHasStartedChat(true);

          // ✅ Mark this session as welcomed to prevent future triggers
          sessionStorage.setItem("welcomedSessionId", sessionId);
          return;
        }

        // If messages exist or not a new chat, just load normally
        const formattedMessages = fetchedMessages.map((msg) => ({
          text: msg.content,
          type: msg.isUser ? "user" : "bot",
          timestamp: new Date(msg.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));

        setMessages(formattedMessages);
        if (formattedMessages.length > 0) setHasStartedChat(true);
      })
      .catch((error) => {
        console.error("❌ Failed to fetch messages:", error);
      });
  }, [sessionId, isNewChat]);

  const handleSendMessage = (messageObj) => {
    setMessages((prev) => [...prev, messageObj]);
    if (!hasStartedChat) setHasStartedChat(true);
  };

  return (
    <div className="h-full bg-[#0E0E1B] flex text-base font-poppins overflow-hidden">
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          {!hasStartedChat ? (
            <InitialSuggestions />
          ) : (
            <ChatWindow messages={messages} />
          )}
        </div>
        <ChatInput onSendMessage={handleSendMessage} sessionId={sessionId} />
      </div>
    </div>
  );
}

export default ChatPage;

