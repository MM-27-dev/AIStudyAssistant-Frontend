import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    quote:
      "BotBuzz transformed our workflow! It’s like having a genius assistant 24/7.",
    avatar: "/avatar.svg",
  },
  {
    name: "Priya Sharma",
    quote: "Incredible technology with amazing support. Highly recommended!",
    avatar: "/discover-personalities.svg",
  },
  {
    name: "Liam Smith",
    quote:
      "Smooth interface and intelligent responses. BotBuzz is a game changer!",
    avatar: "/avatar.svg",
  },
  {
    name: "Sofia Lee",
    quote:
      "A must-have for any modern team. Fast, efficient, and smart assistance!",
    avatar: "/discover-personalities.svg",
  },
  {
    name: "Mohit Verma",
    quote: "BotBuzz is smart, sleek, and saves us hours of manual work.",
    avatar: "/discover-personalities.svg",
  },
  {
    name: "Emily Davis",
    quote: "The support team is amazing. I felt heard and helped every step.",
    avatar: "/avatar.svg",
  },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentSlice = () => {
    const start = page * cardsPerPage;
    return testimonials.slice(start, start + cardsPerPage);
  };

  return (
    <section className="py-20 pt-0 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">What Users Say</h2>
        <p className="text-gray-400 mb-12">
          Trusted by thousands of users across the world.
        </p>

        <div className="grid gap-8 md:grid-cols-3 transition-all duration-500">
          {getCurrentSlice().map((t, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border shadow transition-all duration-300 ${
                i === 1
                  ? "bg-[#2A2A35] border-white scale-105 shadow-lg"
                  : "bg-[#1F1F26] border-gray-700"
              }`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-white"
              />
              <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === page ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
