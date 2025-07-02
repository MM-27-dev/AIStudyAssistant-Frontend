import React from "react";
import { Paperclip, Mic, Send } from "lucide-react";

export default function ChatInput() {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="border-t border-[#33334A] py-6 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative bg-[#1B1B2B] rounded-xl border border-[#33334A] focus-within:border-[#33334A] transition-colors">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a prompt here"
            className="w-full bg-transparent pl-5 pr-32 py-3 text-[#CCCCCC] placeholder-[#888899] focus:outline-none text-sm sm:text-base font-poppins"
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Paperclip className="w-5 h-5 text-[#888899]" />
            </button>

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