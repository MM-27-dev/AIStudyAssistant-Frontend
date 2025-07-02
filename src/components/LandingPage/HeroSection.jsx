import React from "react";

const HeroSection = () => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-30 pb-18 ">
      <h1 className="text-[2.75rem] md:text-[3.5rem] font-bold leading-tight text-center">
        Unlock The Power Of{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          BotBuzz AI
        </span>
        <br />
        With Smartest AI{" "}
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Your Ultimate AI-Powered Content and Conversational Companion
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto mb-16">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:border-purple-500 transition-colors"
        />
        <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-medium transition-all mt-2 sm:mt-0">
          Get Started Free
        </button>
      </div>

      <div>
        <img
          src="/bots-ai-bg.svg"
          alt="Infinity AI Bots"
          className="w-full object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
