import React from "react";

const SeamlessFollowUp = () => {
  return (
    <section className=" text-white px-6 md:px-24 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <p className="text-[#B5B5FF] text-lg font-medium mb-4">AI Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Seamless Follow-up Questions
          </h2>
          <p className="text-[#B5B5FF] text-lg mb-8">
            Keeps The Conversation Flowing Naturally By Asking Relevant
            Follow-Up Questions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-[#B5B5FF] text-xl">✔</span>
              <p className="text-white text-lg">Enhanced Engagement</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B5B5FF] text-xl">✔</span>
              <p className="text-white text-lg">Deeper Understanding</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B5B5FF] text-xl">✔</span>
              <p className="text-white text-lg">Smooth Interactions</p>
            </li>
          </ul>
        </div>

        {/* Image Panel - Redesigned to match updated image */}
        <div className="rounded-3xl border border-[#313036] bg-[#1A1A1A] p-2 shadow-xl max-w-2xl w-full">
          <div className="rounded-2xl bg-[#1A1A1A] p-4">
            <div className="bg-[#262626] rounded-xl p-6 space-y-4 relative">
              {/* User Question */}
              <div className="text-[#A1A1AA] text-sm mb-2 flex items-center gap-2">
                <span className="border-l-2 border-[#B5B5FF] h-8 mr-2"></span>
                Your Question
                <img
                  src="/avatar.svg"
                  alt="User"
                  className="w-6 h-6 rounded-full ml-2"
                />
              </div>

              <div className="bg-[#3D3D3D] h-4 rounded w-3/4"></div>
              <div className="bg-[#3D3D3D] h-4 rounded w-2/3"></div>

              {/* Bot Response */}
              <div className="flex items-center gap-2 mt-4">
                <div className="bg-[#B5B5FF] rounded-md p-1">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <span className="text-[#8B81FF] font-semibold">
                  Bot Buzz Response
                </span>
                <span className="text-[#A1A1AA] text-xs ml-auto">
                  01 July – 05:12 PM
                </span>
              </div>

              <div className="bg-[#3D3D3D] h-4 rounded w-full mt-2"></div>
              <div className="bg-[#3D3D3D] h-4 rounded w-11/12"></div>
              <div className="bg-[#3D3D3D] h-4 rounded w-5/6"></div>

              {/* Follow-up Buttons */}
              <div className="flex gap-4 pt-6">
                <button className="border border-[#B5B5FF] text-[#B5B5FF] px-4 py-2 rounded-lg text-sm">
                  Can our perception of reality be trusted?
                </button>
                <button className="border border-[#B5B5FF] text-[#B5B5FF] px-4 py-2 rounded-lg text-sm">
                  How do different philosophers define the self?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessFollowUp;
