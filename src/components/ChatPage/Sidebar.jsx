import React from "react";
import {
  MessageSquare,
  History,
  Users,
  Settings,
  ChevronDown,
  ChevronRight, 
  Sparkles,
  ArrowRight,
  MessageSquareText,
  ChevronLeft, 
} from "lucide-react";

export default function Sidebar({ isCollapsed, onToggleCollapse }) {
  const [chatHistoryOpen, setChatHistoryOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  return (
    <div
      className={`bg-[#1B1B2B] flex flex-col transition-all duration-300 min-h-screen relative z-10 ${
        isCollapsed ? "w-20" : "w-60"
      } py-4`}
    >
      {/* App Icon */}
      <div
        className={`px-4 mb-6 flex items-center ${
          isCollapsed ? "justify-center" : "justify-start"
        }`}
      >
        <img src="/header-logo.png" alt="App Icon" className="w-10 h-10" />
        {!isCollapsed && (
          // Collapse button when sidebar is expanded
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded-md hover:bg-gray-700 transition-colors text-[#888899] ml-auto" // Pushed to the right
          >
            <ChevronLeft className="w-4 h-4" /> {/* Icon to collapse */}
          </button>
        )}
      </div>

      {/* Expand button for collapsed state - Absolutely positioned */}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="absolute top- -right-3 p-1 bg-white rounded-lg shadow-lg flex items-center justify-center transition-all hover:scale-105 z-20"
          style={{ width: "20px", height: "20px" }} // Explicitly setting width/height for exact roundness
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />{" "}
          {/* Dark icon for white background */}
        </button>
      )}

      {/* Chat Button (Always visible and styled as active) */}
      <div className="px-4 mb-4">
        <button
          className={`w-full bg-gradient-to-r from-[#6D28D9] to-[#4F46E5] text-white py-3 px-4 rounded-lg flex items-center font-semibold transition-all text-sm
            ${
              isCollapsed ? "justify-center" : "gap-3"
            } hover:from-[#6D28D9]/90 hover:to-[#4F46E5]/90`}
        >
          {isCollapsed ? (
            <MessageSquareText className="w-5 h-5" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">Chat</span>
            </>
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 text-sm font-poppins">
        {/* Chat History */}
        <div>
          <button
            onClick={() => setChatHistoryOpen(!chatHistoryOpen)}
            className={`w-full flex items-center px-3 py-2 text-[#CCCCCC] hover:bg-gray-700 rounded-lg transition-colors ${
              isCollapsed ? "justify-center" : "justify-between gap-3"
            }`}
          >
            <div
              className={`flex items-center flex-shrink-0 ${
                isCollapsed ? "" : "gap-3"
              }`}
            >
              <History className="w-5 h-5" />
              {!isCollapsed && <span className="truncate">Chat History</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  chatHistoryOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
        </div>

        {/* AI Personalities */}
        <button
          className={`w-full flex items-center px-3 py-2 text-[#CCCCCC] hover:bg-gray-700 rounded-lg transition-colors ${
            isCollapsed ? "justify-center" : "gap-3"
          }`}
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="truncate">AI Personalities</span>}
        </button>

        {/* Settings */}
        <div>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`w-full flex items-center px-3 py-2 text-[#CCCCCC] hover:bg-gray-700 rounded-lg transition-colors ${
              isCollapsed ? "justify-center" : "justify-between gap-3"
            }`}
          >
            <div
              className={`flex items-center flex-shrink-0 ${
                isCollapsed ? "" : "gap-3"
              }`}
            >
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span className="truncate">Settings</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  settingsOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {/* Settings Submenu with connecting lines */}
          {settingsOpen && !isCollapsed && (
            <div className="relative ml-8 mt-2 space-y-1">
              {/* Vertical line connecting to submenu items */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-500 ml-[-12px]"></div>

              {/* Tone */}
              <div className="flex items-center">
                <div className="w-3 h-[1px] bg-gray-500 mr-2 ml-[-12px]"></div>
                <div className="text-[#888899] text-xs py-1">Tone</div>
              </div>

              {/* Language */}
              <div className="flex items-center">
                <div className="w-3 h-[1px] bg-gray-500 mr-2 ml-[-12px]"></div>
                <div className="text-[#888899] text-xs py-1">Language</div>
              </div>

              {/* Formality Level */}
              <div className="flex items-center">
                <div className="w-3 h-[1px] bg-gray-500 mr-2 ml-[-12px]"></div>
                <div className="text-[#888899] text-xs py-1">
                  Formality Level
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Upgrade to Pro */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6B4FF6] rounded-xl p-4 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Upgrade to Pro</h3>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Unlock powerful features with our pro upgrade today!
            </p>
            <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors text-sm">
              Upgrade now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Collapsed Upgrade Button */}
      {isCollapsed && (
        <div className="p-4 flex justify-center">
          <button className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#6B4FF6] p-2 rounded-xl flex items-center justify-center hover:from-[#8B5CF6]/90 hover:to-[#6B4FF6]/90 transition-all">
            <Sparkles className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}