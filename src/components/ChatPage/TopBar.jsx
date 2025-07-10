import React, { useEffect, useState, useRef } from "react";
import {
  MessageSquareText,
  Shield,
  LogOut,
  Settings,
  UserPlus,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../Services/authServices";

export default function TopBar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const navigate = useNavigate();
  const profileMenuRef = useRef(null); // 👈 Ref for dropdown

  // Fetch logged-in user info
  useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await AuthService.getCurrentUser();
      console.log("User response:", response); // ✅ Log this
      const username = response?.data?.data?.username || "";
      if (username) {
        setUserInitial(username.charAt(0).toUpperCase());
      }
    } catch (err) {
      console.error("Failed to fetch user:", err.message);
    }
  };
  fetchUser();
}, []);


  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      alert("Failed to logout. Try again.");
    }
  };

  return (
    <div className="bg-[#1B1B2B] border-b border-[#33334A] px-4 sm:px-6 py-4 flex items-center justify-end font-poppins">
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors text-[#888899]">
          <MessageSquareText className="w-5 h-5" />
        </button>

        <button className="p-2 rounded-md hover:bg-gray-700 transition-colors text-[#888899]">
          <Shield className="w-5 h-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileMenuRef}>
         <button
  onClick={() => setShowProfileMenu(!showProfileMenu)}
  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-600 text-white font-semibold flex items-center justify-center hover:bg-gray-500 transition-colors"
>
  {userInitial || <User className="w-5 h-5 text-[#CCCCCC]" />}
</button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-[#1B1B2B] rounded-lg shadow-lg border border-[#33334A] py-2 z-50 text-sm">
              <button className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 flex items-center gap-3">
                <User className="w-4 h-4" />
                View Profile
              </button>
               <button
                onClick={() => {
                  setShowProfileMenu(false);
                 navigate("/profile/settings");
                }}
                className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 flex items-center gap-3"
              >
                <Settings className="w-4 h-4" />
                Profile Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 flex items-center gap-3">
                <UserPlus className="w-4 h-4" />
                Customize Bot
              </button>
              <hr className="border-[#33334A] my-2" />
              <button
                className="w-full px-4 py-2 text-left text-[#CCCCCC] hover:bg-gray-600 flex items-center gap-3"
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
