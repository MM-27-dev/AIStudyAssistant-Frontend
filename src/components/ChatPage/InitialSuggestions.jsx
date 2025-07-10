// InitialSuggestions.jsx
import React from "react";
import { X, Target, Network, Clover } from "lucide-react";

const iconColors = {
  "Create a crossword puzzle for me": "bg-[#3B3BFF] text-white",
  "Plan a budget for my vacation": "bg-[#FF6B6B] text-white",
  "Ethical implications of AI": "bg-[#6BD27F] text-white",
  "Calendar for the whole month": "bg-[#FFD43B] text-black",
};

const suggestions = [
  { icon: X, title: "Create a crossword puzzle for me" },
  { icon: Target, title: "Plan a budget for my vacation" },
  { icon: Network, title: "Ethical implications of AI" },
  { icon: Clover, title: "Calendar for the whole month" },
];

export default function InitialSuggestions() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
      <img
        src="/bot-icon.png"
        alt="AI Assistant"
        className="w-10 h-10 sm:w-12 sm:h-12"
      />
      <h1 className="text-xl sm:text-2xl font-medium text-white mb-10">
        Your Daily AI Assistant
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl px-4">
        {suggestions.map((suggestion, index) => {
          const iconStyle =
            iconColors[suggestion.title] || "bg-gray-600 text-white";
          const Icon = suggestion.icon;

          return (
            <button
              key={index}
              className="bg-[#20202F] hover:bg-gray-700 transition-colors rounded-xl p-4 sm:p-5 w-full flex flex-col items-start gap-3 sm:gap-4 text-left shadow-lg font-poppins"
            >
              <div
                className={`w-8 h-8 rounded-md ${iconStyle} flex items-center justify-center`}
              >
                {Icon && <Icon className="w-5 h-5" />}
              </div>
              <p className="text-sm sm:text-base text-[#CCCCCC] leading-tight">
                {suggestion.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
