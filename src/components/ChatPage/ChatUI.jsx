import React from "react";
import { X, Target, Network, Clover } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import SuggestionCard from "./SuggestionCard";
import ChatInput from "./ChatInput";

function ChatUI() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

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
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            {/* AI Assistant Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-8">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-sm"></div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-white mb-12">
              Your Daily AI Assistant
            </h1>

            {/* Suggestion Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full mb-8">
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
