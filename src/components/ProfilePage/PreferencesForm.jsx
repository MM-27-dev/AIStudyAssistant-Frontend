// components/ProfilePage/PreferencesForm.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

export default function PreferencesForm({
  formData,
  setFormData,
  notificationsEnabled,
  setNotificationsEnabled,
}) {
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-10">
      {/* Notifications Toggle */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-[#e5e7eb]">
            Notifications
          </h3>
          <button
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              notificationsEnabled ? "bg-[#6366f1]" : "bg-[#4b5563]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationsEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        <p className="text-sm text-[#9ca3af]">
          You will receive important notifications via email.
        </p>
      </div>

      {/* Language Preferences */}
      <div>
        <h3 className="text-xl font-semibold text-[#e5e7eb] mb-6">Languages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* System Language Dropdown */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">
              System Language
            </label>
            <div className="relative">
              <select
                value={formData.systemLanguage}
                onChange={(e) =>
                  handleInputChange("systemLanguage", e.target.value)
                }
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb] focus:outline-none focus:border-[#6366f1] appearance-none pr-10"
              >
                <option value="English (US)">🇺🇸 English (US)</option>
                <option value="English (UK)">🇬🇧 English (UK)</option>
                <option value="Spanish">🇪🇸 Spanish</option>
                <option value="French">🇫🇷 French</option>
                <option value="German">🇩🇪 German</option>
                <option value="Hindi">🇮🇳 Hindi</option>
                <option value="Mandarin">🇨🇳 Mandarin</option>
                <option value="Japanese">🇯🇵 Japanese</option>
                <option value="Arabic">🇸🇦 Arabic</option>
                <option value="Portuguese">🇧🇷 Portuguese</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            </div>
          </div>

          {/* Generation Language Dropdown */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">
              Generation Language
            </label>
            <div className="relative">
              <select
                value={formData.generationLanguage}
                onChange={(e) =>
                  handleInputChange("generationLanguage", e.target.value)
                }
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb] focus:outline-none focus:border-[#6366f1] appearance-none pr-10"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            </div>
          </div>
        </div>
      </div>

      {/* Tone Settings */}
      <div>
        <h3 className="text-xl font-semibold text-[#e5e7eb] mb-6">Tone</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tone Dropdown */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">Tone</label>
            <div className="relative">
              <select
                value={formData.tone}
                onChange={(e) => handleInputChange("tone", e.target.value)}
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb] focus:outline-none focus:border-[#6366f1] appearance-none pr-10"
              >
                <option value="Formal">Formal</option>
                <option value="Casual">Casual</option>
                <option value="Professional">Professional</option>
                <option value="Friendly">Friendly</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            </div>
          </div>

          {/* Formality Level Dropdown */}
          <div>
            <label className="block text-sm text-[#9ca3af] mb-2">
              Formality Level
            </label>
            <div className="relative">
              <select
                value={formData.formalityLevel}
                onChange={(e) =>
                  handleInputChange("formalityLevel", e.target.value)
                }
                className="w-full bg-[#2a3441] border border-[#3f4855] rounded-lg px-4 py-3 text-[#e5e7eb] focus:outline-none focus:border-[#6366f1] appearance-none pr-10"
              >
                <option value="Casual">Casual</option>
                <option value="Semi-formal">Semi-formal</option>
                <option value="Formal">Formal</option>
                <option value="Very Formal">Very Formal</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button (Optional) */}
      <div>
        <button
          onClick={() =>
            alert("Preferences saved (not yet connected to backend)")
          }
          className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Save Preferences →
        </button>
      </div>
    </div>
  );
}
