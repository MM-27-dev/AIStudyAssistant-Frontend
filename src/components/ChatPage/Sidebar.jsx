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
} from "lucide-react";

export default function Sidebar({ isCollapsed, onToggleCollapse }) {
  const [chatHistoryOpen, setChatHistoryOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(true);

  return (
    <div
      className={`bg-gray-800 h-full flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* App Icon */}
      <div className="p-4 flex items-center justify-between">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        {!isCollapsed && (
          <button
            onClick={onToggleCollapse}
            className="p-1 rounded-md hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {/* Chat Button */}
      <div className="px-4 mb-4">
        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg flex items-center gap-3 hover:from-purple-700 hover:to-blue-700 transition-all">
          <MessageSquare className="w-5 h-5" />
          {!isCollapsed && <span>Chat</span>}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {/* Chat History */}
        <div>
          <button
            onClick={() => setChatHistoryOpen(!chatHistoryOpen)}
            className={`w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors ${
              isCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-3">
              <History className="w-5 h-5" />
              {!isCollapsed && <span>Chat History</span>}
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
          className={`w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <Users className="w-5 h-5" />
          {!isCollapsed && <span>AI Personalities</span>}
        </button>

        {/* Settings */}
        <div>
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors ${
              isCollapsed ? "justify-center" : "justify-between"
            }`}
          >
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5" />
              {!isCollapsed && <span>Settings</span>}
            </div>
            {!isCollapsed && (
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  settingsOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {/* Settings Submenu */}
          {settingsOpen && !isCollapsed && (
            <div className="ml-8 mt-2 space-y-1">
              <div className="text-gray-400 text-sm py-1">Tone</div>
              <div className="text-gray-400 text-sm py-1">Language</div>
              <div className="text-gray-400 text-sm py-1">Formality Level</div>
            </div>
          )}
        </div>
      </nav>

      {/* Upgrade to Pro */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Upgrade to Pro</h3>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Unlock powerful features with our pro upgrade today!
            </p>
            <button className="w-full bg-white text-purple-600 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              Upgrade now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Collapsed Upgrade Button */}
      {isCollapsed && (
        <div className="p-4">
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-blue-700 transition-all">
            <Sparkles className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
