import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <img src="/vital_signs.svg" alt="Sparkles " />,
    title: "AI-Powered Chat",
    description:
      "Engage in intelligent conversations with our AI-powered assistant.",
  },
  {
    icon: <img src="/automation.svg" alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Tailor your experience with flexible configuration settings.",
  },
  {
    icon: <img src="/autorenew.svg" alt="Sparkles " />,
    title: "24/7 Support",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/cast.svg" alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/group.svg" alt="Sparkles " />,
    title: "24/7 Support",
    description: "Get assistance anytime with our always-on support system.",
  },
  {
    icon: <img src="/web.svg" alt="Sparkles " />,
    title: "Customizable Tools",
    description: "Get assistance anytime with our always-on support system.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className=" bg-[#0B0B0F] pb-2 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Powerful Features
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to deliver exceptional AI experiences.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A1F] p-6 rounded-xl border border-gray-800 shadow-md hover:shadow-xl transition "
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="mb-4 flex justify-center items-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Features;
