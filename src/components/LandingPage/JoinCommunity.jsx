import { Star } from "lucide-react";
import React from "react";

const JoinCommunity = () => {
  return (
    // <section className=" px-4 md:px-10 py-16">
    //   <div className="max-w-4xl mx-auto rounded-2xl border border-[#2D2D2D] bg-gradient-to-br from-[#121212] to-[#0D0D0D] text-center px-6 py-12 shadow-[2px_-9px_12px_rgba(255,255,255,0.15),_-3px_0px_4px_rgba(255,255,255,0.15),_2px_4px_5px_rgba(255,255,255,0.15)]">
    //     <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
    //       Join Our Community
    //     </h2>
    //     <p className="text-[#87878e] text-sm md:text-base max-w-2xl mx-auto mb-6">
    //       At Bot Buzz, We Value Connection And Shared Experiences. Join Our
    //       Vibrant Community To Enhance Your Daily Interactions With AI, Share
    //       Stories, Exchange Tips, And Discover New Ways To Maximize Your AI-Con
    //       Experience.
    //     </p>
    //     <button className="border border-[#ccccda] text-[#b7b7be] text-xs px-6 py-2 rounded-full hover:bg-[#B5B5FF] hover:text-black transition-all">
    //       Join Community
    //     </button>
    //   </div>
    // </section>
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className=" max-w-4xl mx-auto rounded-2xl border border-[#2D2D2D] bg-gradient-to-br from-[#121212] to-[#0D0D0D] text-center px-6 py-12 shadow-[2px_-9px_12px_rgba(255,255,255,0.15),_-3px_0px_4px_rgba(255,255,255,0.15),_2px_4px_5px_rgba(255,255,255,0.15)]">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Connect with thousands of users who are already transforming their
          workflow with BotBuzz AI.
        </p>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {/* Replaced divs with img tags using /avatar.svg */}
              <img
                src="/avatar.svg" // Placeholder for /avatar.svg
                alt="User Avatar 1"
                className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
              />
              <img
                src="/discover-personalities.svg" // Placeholder for /avatar.svg
                alt="User Avatar 2"
                className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
              />
              <img
                src="/avatar.svg" // Placeholder for /avatar.svg
                alt="User Avatar 3"
                className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
              />
            </div>
            <span className="text-gray-300">50,000+ Active Users</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
            ))}
            <span className="text-gray-300 ml-2">4.9/5 Rating</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-lg font-medium transition-all">
          Join Community
        </button>
      </div>
    </section>
  );
};

export default JoinCommunity;
