import React from "react";
import {
  MessageSquareText,
  Shield,
  User,
  LogOut,
  Settings,
  UserPlus,
} from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  // Removed isCollapsed and onToggleCollapse props
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8001/api/v1/users/logout",
        {},
        {
          withCredentials: true,
        }
      );

      // Optionally clear localStorage/sessionStorage
      // localStorage.removeItem("user");

      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Failed to logout. Try again.");
    }
  };
  return (
    <div className="bg-[#1B1B2B] border-b border-[#33334A] px-4 sm:px-6 py-4 flex items-center justify-end font-poppins">
      {" "}
      {/* Adjusted justify-end as left side is empty now */}
      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors text-[#888899]">
          <MessageSquareText className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors text-[#888899]">
          <Shield className="w-5 h-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 transition-colors flex-shrink-0"
          >
            <User className="w-5 h-5 text-[#CCCCCC]" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1B1B2B] rounded-lg shadow-lg border border-[#33334A] py-2 z-50 text-sm">
              <button className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 transition-colors flex items-center gap-3">
                <User className="w-4 h-4" />
                View Profile
              </button>
              <button className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 transition-colors flex items-center gap-3">
                <Settings className="w-4 h-4" />
                Profile Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 transition-colors flex items-center gap-3">
                <UserPlus className="w-4 h-4" />
                Customize Bot
              </button>
              <hr className="border-[#33334A] my-2" />
              <button
                className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 transition-colors flex items-center gap-3"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}