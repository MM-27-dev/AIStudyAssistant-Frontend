import React, { useEffect, useRef, useState } from "react";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ChatWindow({ messages }) {
  const bottomRef = useRef(null);
  const [showTyping, setShowTyping] = useState(false);


  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showTyping]);

  // Detect if bot is typing (i.e., user message sent and no bot reply yet)
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (last?.type === "user") {
      setShowTyping(true);
    } else if (last?.type === "bot") {
      setShowTyping(false);
    }
  }, [messages]);

  const formatTime = (timestamp) => {
    return (
      timestamp ||
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };

  return (
    <div className="flex-1 h-[72vh] overflow-y-auto px-4 py-6 space-y-3 scrollbar-hidden ">
      {/* Today separator */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="h-px bg-[#2a3441] flex-1"></div>
          <span className="text-[#9ca3af] text-sm">Today</span>
          <div className="h-px bg-[#2a3441] flex-1"></div>
        </div>
      </div>

      {/* Render messages */}
      {messages.map((msg, i) => (
        <div key={i} className="flex items-center gap-3 max-w-4xl mx-auto">
          {msg.type === "user" ? (
            <>
              <div className="flex-1" />
              <div className="flex items-start gap-3">
                {/* <div className="bg-[#2a3441] rounded-xl p-4 max-w-[80%]"> */}
                  {/* <p className="text-[#e5e7eb] text-sm leading-relaxed">
                    {msg.text}
                  </p> */}
                  <div className="bg-[#2a3441] rounded-xl p-4 max-w-[80%]">
                    {/* Show file if user uploaded one */}
                    {msg.messageType === "file" && msg.file?.originalName && (
                      <a
                        href={`/api/files/${msg.file.filename}`} // Update this to your actual file route
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm mb-2 block underline"
                      >
                        📎 Attached file: {msg.file.originalName}
                      </a>
                    )}

                    {/* Show user-typed message if present */}
                    {msg.text && (
                      <p className="text-[#e5e7eb] text-sm leading-relaxed">
                        {msg.text}
                      </p>
                    )}
                  </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#9ca3af] text-xs">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-1">
                <div className="w-8 h-8 bg-[#6366f1] rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#9ca3af] text-xs">
                  {formatTime(msg.timestamp)}
                </span>
              </div>
              <div className="bg-[#2a3441] rounded-xl p-4 max-w-[80%]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#6366f1] text-sm font-medium">
                    Response
                  </span>
                  <span className="text-[#9ca3af] text-xs">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                {/* <p className="text-[#e5e7eb] text-sm leading-relaxed">
                  {msg.text}
                </p> */}
                <div className="text-[#e5e7eb] text-sm leading-relaxed">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <p className="my-2">{children}</p>,
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 underline"
                        >
                          {children}
                        </a>
                      ),
                      code: ({ children }) => (
                        <code className="bg-gray-800 px-1 py-0.5 rounded text-sm text-black-400 text-bold">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Typing indicator */}
      {showTyping && (
        <div className="flex items-start gap-3 max-w-4xl mx-auto">
          <div className="w-8 h-8 mt-1 bg-[#6366f1] rounded-full flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-center gap-1 mt-1 text-[#e5e7eb] text-sm font-medium">
            <span className="animate-typingDot">.</span>
            <span className="animate-typingDot delay-150">.</span>
            <span className="animate-typingDot delay-300">.</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
