import React from "react";
import { X, Target, Network, Clover } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import SuggestionCard from "./SuggestionCard";
import ChatInput from "./ChatInput";

function ChatUI() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(true); // Default to collapsed as per image_dbbe79.png

  const suggestions = [
    {
      icon: X,
      title: "Create a crossword puzzle for me",
    },
    {
      icon: Target,
      title: "Plan a budget for my vacation",
    },
    {
      icon: Network,
      title: "Ethical implications of AI",
    },
    {
      icon: Clover,
      title: "Calendar for the whole month",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E1B] flex text-base font-poppins">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <TopBar
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
            {/* AI Assistant Icon */}
              <img
                src="/bot-icon.png"
                alt="AI Assistant"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            

            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-medium text-white mb-10">
              Your Daily AI Assistant
            </h1>
            {/* Suggestion Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl px-4">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={index}
                  icon={suggestion.icon}
                  title={suggestion.title}
                  onClick={() => console.log(`Clicked: ${suggestion.title}`)}
                />
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <ChatInput/>
        </div>
      </div>
    </div>
  );
}

export default ChatUI;