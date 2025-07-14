// components/ProfilePage/ProfileUpdatePage.jsx
import React, { useEffect, useState } from "react";
import { AuthService } from "../Services/authServices";
import ProfileDetailsForm from "../components/ProfilePage/ProfileDetailsForm";
import PreferencesForm from "../components/ProfilePage/PreferencesForm";

export default function ProfileUpdatePage() {
  const [activeTab, setActiveTab] = useState("Profile Details");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    systemLanguage: "English",
    generationLanguage: "English",
    tone: "Formal",
    formalityLevel: "Casual",
  });
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await AuthService.getCurrentUser();
        const user = res?.data?.data;
        if (user) {
          setFormData((prev) => ({
            ...prev,
            username: user.username || "",
            email: user.email || "",
          }));
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };
    fetchUser();
  }, []);

  const tabs = [
    "Profile Details",
    "Preferences",
    "Usage",
    "Plan and Billing",
    "Team",
    "Integrations",
    "API Dashboard",
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="border-b border-[#2a3441] px-6 py-4">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? "border-[#6366f1] text-[#6366f1]"
                  : "border-transparent text-[#9ca3af] hover:text-[#e5e7eb] hover:border-[#4b5563]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6 min-h-0">
        <div className="max-w-4xl">
          {activeTab === "Profile Details" && <ProfileDetailsForm />}

          {activeTab === "Preferences" && (
            <PreferencesForm
              formData={formData}
              setFormData={setFormData}
              notificationsEnabled={notificationsEnabled}
              setNotificationsEnabled={setNotificationsEnabled}
            />
          )}

          {activeTab !== "Profile Details" && activeTab !== "Preferences" && (
            <div className="text-center py-12">
              <p className="text-[#9ca3af]">
                {activeTab} content coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
