import { Bot } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="px-4 sm:px-6 lg:px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12"
          variants={containerVariants}
        >
          <motion.div className="col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center space-x-2">
                <motion.img
                  alt="logo-image"
                  src="/logo.svg"
                  className="w-8 h-8"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  className="text-xl font-bold"
                  whileHover={{ color: "#8b5cf6" }}
                >
                  BotBuzz
                </motion.span>
              </div>
            </motion.div>
            <motion.p className="text-gray-400 mb-4" variants={itemVariants}>
              Your ultimate AI-powered content and conversational companion.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-semibold mb-4"
              whileHover={{ color: "#8b5cf6" }}
            >
              Resources
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Documentation
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  API Reference
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Tutorials
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Blog
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-semibold mb-4"
              whileHover={{ color: "#8b5cf6" }}
            >
              Pricing
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Free Plan
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Plus Plan
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Pro Plan
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Enterprise
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-semibold mb-4"
              whileHover={{ color: "#8b5cf6" }}
            >
              Company
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Careers
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Contact
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Press
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h4
              className="font-semibold mb-4"
              whileHover={{ color: "#8b5cf6" }}
            >
              Others
            </motion.h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Privacy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Terms
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Security
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Status
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-400 text-sm mb-4 sm:mb-0"
            whileHover={{ color: "#ffffff" }}
          >
            Copyright © 2024. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center space-x-6"
            variants={containerVariants}
          >
            <motion.span
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff", scale: 1.05 }}
            >
              Status
            </motion.span>
            <motion.span
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff", scale: 1.05 }}
            >
              Accessibility
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
