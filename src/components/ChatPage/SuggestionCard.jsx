import React from "react";

const iconColors = {
  "Create a crossword puzzle for me": "bg-[#3B3BFF] text-white", // Blue
  "Plan a budget for my vacation": "bg-[#FF6B6B] text-white", // Red-ish
  "Ethical implications of AI": "bg-[#6BD27F] text-white", // Green
  "Calendar for the whole month": "bg-[#FFD43B] text-black", // Yellow
};

export default function SuggestionCard({ icon: Icon, title, onClick }) {
  const iconStyle = iconColors[title] || "bg-gray-600 text-white";

  return (
    <button
      onClick={onClick}
      className="bg-[#20202F] hover:bg-gray-700 transition-colors rounded-xl p-4 sm:p-5 w-full flex flex-col items-start gap-3 sm:gap-4 text-left shadow-lg font-poppins"
    >
      <div
        className={`w-8 h-8 rounded-md ${iconStyle} flex items-center justify-center flex-shrink-0`}
      >
        {Icon && <Icon className="w-5 h-5" />}
      </div>
      <p className="text-sm sm:text-base text-[#CCCCCC] leading-tight">
        {title}
      </p>
    </button>
  );
}