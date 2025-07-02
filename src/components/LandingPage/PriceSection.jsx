import React from "react";

const plans = [
  {
    name: "Free",
    price: "USD $0/month",
    features: [
      "Limited access to Multiple Personalities (3 personalities)",
      "Basic Dynamic Suggestions",
      "Multi-platform Integration (limited to 1 device)",
      "Multilingual Support (2 languages)",
    ],
    image: "/free-plan.svg",
    button: {
      text: "Your Current Plan",
      disabled: true,
    },
    highlighted: false,
  },
  {
    name: "Plus",
    price: "USD $20/month",
    features: [
      "Access to Multiple Personalities (10 personalities)",
      "Real-time Web References (unlimited queries)",
      "Multi-platform Integration (up to 5 devices)",
      "Multilingual Support (10 languages)",
    ],
    image: "/plus-plan.svg", // replace with your path
    button: {
      text: "Upgrade to Plus",
      disabled: false,
    },
    highlighted: true,
    tag: "Best Selling",
  },
  {
    name: "Team",
    price: "USD $40/month (per user)",
    features: [
      "Advanced Generated Images (limited to 100 images/month for the team)",
      "Multilingual Support (15 languages)",
      "Advanced Feedback Mechanism",
      "Collaborative conversation features for team projects",
    ],
    image: "/team-plan.svg", // replace with your path
    button: {
      text: "Upgrade to Team",
      disabled: false,
    },
    highlighted: false,
  },
];


import { Check } from 'lucide-react';


const PriceSection = () => {
  return (
   
    <section id="pricing" className="bg-[#0B0B0F] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Choose the Plan that's Right For You
        </h2>
        <p className="text-lg text-gray-400 mb-16">
          Provide Descriptions, Get Instant AI Generated Content
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#1A1A1F] rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-purple-600 shadow-lg shadow-purple-900/50"
                  : "border-gray-800"
              } flex flex-col`}
            >
              {plan.tag && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={plan.image}
                  alt={`${plan.name} Plan`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.price}</p>

              <ul className="flex-grow space-y-3 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.button.disabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
                disabled={plan.button.disabled}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default PriceSection;
