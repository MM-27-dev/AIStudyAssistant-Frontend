import React from "react";

export default function SuggestionCard({ icon: Icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-left hover:bg-gray-750 hover:border-gray-600 transition-all duration-200 group"
    >
      <div className="mb-4">
        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gray-600 transition-colors">
          {Icon && <Icon className="w-5 h-5 text-gray-400" />}
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{title}</p>
    </button>
  );
}
