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

const PricingSection = () => {
  return (
    <section className="bg-black text-white  px-4 ">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-white bg-[#C4B5FD]/10 text-sm font-medium py-2 px-4 rounded-xl mb-4 inline-block">
          Plan & Pricing
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          Choose the Plan that’s Right For You
        </h2>
        <p className="text-gray-400 text-lg mb-14">
          Provide Descriptions, Get Instant AI Generated Content
        </p>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 relative flex flex-col justify-between ${
                plan.highlighted
                  ? "bg-[#18181B] border border-[#52525B]"
                  : "bg-white text-black border border-gray-100"
              }`}
            >
              {/* Plan Image */}
              <img
                src={plan.image}
                alt={`${plan.name} plan`}
                className="rounded-xl mb-6 w-full object-cover"
              />

              {/* Best Selling Tag */}
              {plan.tag && (
                <span className="absolute top-6 right-6 bg-[#C4B5FD]/20 text-[#C4B5FD] text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}

              {/* Title + Price */}
              <div
                className={`${plan.highlighted ? "text-white" : "text-black"}`}
              >
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm mb-6">{plan.price}</p>
              </div>

              {/* Features */}
              <ul
                className={`flex-1 space-y-4 text-sm ${
                  plan.highlighted ? "text-white" : "text-gray-400"
                }`}
              >
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-xl leading-none">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                disabled={plan.button.disabled}
                className={`mt-6 w-full py-2 rounded-lg text-sm font-medium transition-all ${
                  plan.button.disabled
                    ? "bg-transparent border border-[#A1A1AA] text-[#A1A1AA] cursor-not-allowed"
                    : "bg-[#C4B5FD] text-black hover:bg-[#a08cfb]"
                }`}
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

export default PricingSection;
