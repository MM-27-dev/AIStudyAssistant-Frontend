// Sidebar.jsx
import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/authServices";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [chatHistoryOpen, setChatHistoryOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const fetchSessions = async () => {
    try {
      const res = await AuthService.getSessions(10);
      const latestSessions = (res.data || [])
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .slice(0, 10);

      setSessions(latestSessions);
    } catch (err) {
      console.error("Failed to load sessions:", err);
    }
  };

   useEffect(() => {
     fetchSessions();
   }, []);

  const handleNewChat = async () => {
    const currentSessionId = sessionStorage.getItem("chatSessionId");

    if (currentSessionId) {
      try {
        const messagesRes = await AuthService.getSessionMessages(
          currentSessionId
        );
        const messages = messagesRes.data;

        if (messages.length === 0) {
          navigate(`/chatdashboard?newChat=true&sessionId=${currentSessionId}`);
          return;
        }

        // End current session and generate a title
        await AuthService.endSessionAndGenerateTitle(currentSessionId);
        sessionStorage.removeItem("chatSessionId");
      } catch (err) {
        console.warn("Session check failed:", err);
        sessionStorage.removeItem("chatSessionId");
      }
    }

    // Create a brand new session
    try {
      const newSession = await AuthService.createSession({
        title: "Untitled Session",
      });
      const newSessionId = newSession.data._id;
      sessionStorage.setItem("chatSessionId", newSessionId);

      await fetchSessions();

      navigate(`/chatdashboard?newChat=true&sessionId=${newSessionId}`, {
        replace: true,
      });
    } catch (err) {
      console.error("Failed to create new session:", err);
    }
  };

  // Open a session from history
  const handleOpenSession = (sessionId) => {
    sessionStorage.setItem("chatSessionId", sessionId);
    navigate(`/chatdashboard?sessionId=${sessionId}`);
  };

  return (
    <div
      className={`bg-[#1B1B2B] flex flex-col transition-all duration-300 min-h-screen relative z-10 ${
        isCollapsed ? "w-20" : "w-60"
      } py-4`}
    >
      {/* Logo and Collapse Button */}
      <div
        className={`px-4 mb-6 flex items-center ${
          isCollapsed ? "justify-center" : "justify-start"
        }`}
      >
        <img src="/header-logo.png" alt="App Icon" className="w-10 h-10" />
        {!isCollapsed && (
          <button
            onClick={toggleCollapse}
            className="p-1 rounded-md hover:bg-gray-700 transition-colors text-[#888899] ml-auto"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {isCollapsed && (
        <button
          onClick={toggleCollapse}
          className="absolute top-4 -right-3 p-1 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 z-20"
          style={{ width: "20px", height: "20px" }}
        >
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      )}

      {/* New Chat Button */}
      <div className="px-4 mb-4">
        <button
          onClick={handleNewChat}
          className={`w-full bg-gradient-to-r from-[#6D28D9] to-[#4F46E5] text-white py-3 px-4 rounded-lg flex items-center font-semibold transition-all text-sm ${
            isCollapsed ? "justify-center" : "gap-3"
          } hover:from-[#6D28D9]/90 hover:to-[#4F46E5]/90`}
        >
          {isCollapsed ? (
            <MessageSquareText className="w-5 h-5" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">New Chat</span>
            </>
          )}
        </button>
      </div>

      {/* Navigation Links */}
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

          {/* Sessions List */}
          {chatHistoryOpen && !isCollapsed && (
            <div className="ml-6 mt-2 space-y-2">
              {sessions.length === 0 ? (
                <p className="text-xs text-gray-500">No chats yet</p>
              ) : (
                sessions.map((session) => (
                  <button
                    key={session._id}
                    onClick={() => handleOpenSession(session._id)}
                    className="block w-full text-left text-[#CCCCCC] hover:bg-gray-700 rounded-md px-2 py-1 text-sm truncate"
                  >
                    {session.title || "Untitled Session"}
                  </button>
                ))
              )}
            </div>
          )}
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

          {/* Settings Submenu */}
          {settingsOpen && !isCollapsed && (
            <div className="relative ml-8 mt-2 space-y-1">
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

      {/* Upgrade to Pro Section */}
      {!isCollapsed ? (
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
      ) : (
        <div className="p-4 flex justify-center">
          <button className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#6B4FF6] p-2 rounded-xl flex items-center justify-center hover:from-[#8B5CF6]/90 hover:to-[#6B4FF6]/90 transition-all">
            <Sparkles className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
