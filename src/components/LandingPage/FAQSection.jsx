// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const faqs = [
//   {
//     id: 1,
//     question: "Is my data safe with AI-Con?",
//     answer:
//       "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
//   },
//   {
//     id: 2,
//     question: "What is Botbuzz and how does it work?",
//     answer:
//       "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
//   },
//   {
//     id: 3,
//     question: "Can I customize the personality of my AI companion?",
//     answer:
//       "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
//   },
//   {
//     id: 4,
//     question: "How does the real-time web reference feature work?",
//     answer:
//       "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
//   },
//   {
//     id: 5,
//     question:
//       "What are the benefits of the premium plans compared to the free plan?",
//     answer:
//       "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(1);

//   const toggleFAQ = (id) => {
//     setOpenIndex(openIndex === id ? null : id);
//   };

//   return (
//     <section className=" text-white px-6 md:px-24 py-10">
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
//         Everything You Need To Know
//       </h2>
//       <p className="text-[#B5B5FF] text-center mb-10 text-sm">
//         Here Are Some Frequently Asked Questions
//       </p>
//       <div className="max-w-4xl mx-auto">
//         {faqs.map((faq) => (
//           <div
//             key={faq.id}
//             className="border-b border-gray-700 py-6 cursor-pointer"
//             onClick={() => toggleFAQ(faq.id)}
//           >
//             <div className="flex items-start justify-between">
//               <div className="flex gap-6">
//                 <p className="text-[#B5B5FF] text-base font-medium w-10">
//                   0{faq.id}
//                 </p>
//                 <div>
//                   <p
//                     className={`text-base md:text-lg font-semibold ${
//                       openIndex === faq.id ? "text-[#B5B5FF]" : "text-white"
//                     }`}
//                   >
//                     {faq.question}
//                   </p>
//                   {openIndex === faq.id && (
//                     <p className="text-white mt-4 text-sm md:text-base font-medium">
//                       {faq.answer}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div className="text-[#A1A1AA] mt-1">
//                 {openIndex === faq.id ? <ChevronUp /> : <ChevronDown />}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Is my data safe with AI-Con?",
    answer:
      "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
  },
  {
    id: 2,
    question: "What is Botbuzz and how does it work?",
    answer:
      "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
  },
  {
    id: 3,
    question: "Can I customize the personality of my AI companion?",
    answer:
      "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
  },
  {
    id: 4,
    question: "How does the real-time web reference feature work?",
    answer:
      "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
  },
  {
    id: 5,
    question:
      "What are the benefits of the premium plans compared to the free plan?",
    answer:
      "AI-Con is a conversational AI app offering personalized interactions with customizable personalities. It uses natural language processing and machine learning to provide dynamic suggestions and real-time information.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <motion.section
      className=" text-white px-6 md:px-24 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Everything You Need To Know
      </motion.h2>
      <motion.p
        className="text-[#B5B5FF] text-center mb-10 text-sm"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Here Are Some Frequently Asked Questions
      </motion.p>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq,index) => (
          <motion.div
            key={faq.id}
            className="border-b border-gray-700 py-6 cursor-pointer"
            onClick={() => toggleFAQ(faq.id)}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <motion.p
                  className="text-[#B5B5FF] text-base font-medium w-10"
                  whileHover={{ scale: 1.1 }}
                >
                  0{faq.id}
                </motion.p>
                <div>
                  <motion.p
                    className={`text-base md:text-lg font-semibold ${
                      openIndex === faq.id ? "text-[#B5B5FF]" : "text-white"
                    }`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {faq.question}
                  </motion.p>
                  <AnimatePresence>
                    {openIndex === faq.id && (
                      <motion.p
                        className="text-white mt-4 text-sm md:text-base font-medium"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <motion.div
                className="text-[#A1A1AA] mt-1"
                animate={{ rotate: openIndex === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.2 }}
              >
                <ChevronDown />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;

