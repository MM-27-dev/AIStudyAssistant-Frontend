import React from "react";


const features = [
  {
    icon: <img src="/vital_signs.svg" alt="Sparkles " />,
    title: "AI-Powered Chat",
    description:
      "Engage in intelligent conversations with our AI-powered assistant.",
  },
  {
    icon: <img src="/automation.svg"  alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Tailor your experience with flexible configuration settings.",
  },
  {
    icon: <img src="/autorenew.svg"  alt="Sparkles " />,
    title: "24/7 Support",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/cast.svg"  alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/group.svg"  alt="Sparkles " />,
    title: "24/7 Support",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/web.svg"  alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Get assistance anytime with our always-on support system.",
  },
];

const Features = () => {
  return (
    <section className=" bg-[#0B0B0F] pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-400 mb-12">
          Everything you need to deliver exceptional AI experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A1A1F] p-6 rounded-xl border border-gray-800 shadow-md hover:shadow-xl transition "
            >
              <div className="mb-4 flex justify-center items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
