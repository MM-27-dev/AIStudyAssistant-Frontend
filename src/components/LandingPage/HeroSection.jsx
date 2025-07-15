// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative px-4 sm:px-6 lg:px-8 pt-30 pb-18 ">
//       <h1 className="text-[2.75rem] md:text-[3.5rem] font-bold leading-tight text-center">
//         Unlock The Power Of{" "}
//         <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
//           BotBuzz AI
//         </span>
//         <br />
//         With Smartest AI{" "}
//       </h1>
//       <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//         Your Ultimate AI-Powered Content and Conversational Companion
//       </p>

//       <div className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto mb-16">
//         <input
//           type="email"
//           placeholder="Enter your email address"
//           className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:border-purple-500 transition-colors"
//         />
//         <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-medium transition-all mt-2 sm:mt-0">
//           Get Started Free
//         </button>
//       </div>

//       <div>
//         <img
//           src="/bots-ai-bg.svg"
//           alt="Infinity AI Bots"
//           className="w-full object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative px-4 sm:px-6 lg:px-8 pt-30 pb-18"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[2.75rem] md:text-[3.5rem] font-bold leading-tight text-center"
        variants={itemVariants}
      >
        Unlock The Power Of{" "}
        <motion.span
          className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          BotBuzz AI
        </motion.span>
        <br />
        With Smartest AI{" "}
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        Your Ultimate AI-Powered Content and Conversational Companion
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto mb-16"
        variants={itemVariants}
      >
        <motion.input
          type="email"
          placeholder="Enter your email address"
          className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:border-purple-500 transition-colors"
          whileFocus={{ scale: 1.02, borderColor: "#8b5cf6" }}
        />
        <motion.button
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-medium transition-all mt-2 sm:mt-0"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Get Started Free
        </motion.button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src="/bots-ai-bg.svg"
          alt="Infinity AI Bots"
          className="w-full object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

