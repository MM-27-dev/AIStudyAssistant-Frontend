import React from "react";
import { MessageSquareText, Shield, User, ChevronLeft } from "lucide-react";

export default function TopBar({ isCollapsed, onToggleCollapse }) {
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
      {/* Left side - Collapse button when sidebar is collapsed */}
      <div>
        {isCollapsed && (
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors">
          <MessageSquareText className="w-5 h-5 text-gray-400" />
        </button>

        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors">
          <Shield className="w-5 h-5 text-gray-400" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors"
          >
            <User className="w-5 h-5 text-gray-300" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg border border-gray-600 py-2 z-50">
              <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 transition-colors flex items-center gap-3">
                <User className="w-4 h-4" />
                View Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 transition-colors flex items-center gap-3">
                <Shield className="w-4 h-4" />
                Profile Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 transition-colors flex items-center gap-3">
                <MessageSquareText className="w-4 h-4" />
                Customize Bot
              </button>
              <hr className="border-gray-600 my-2" />
              <button className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-600 transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
