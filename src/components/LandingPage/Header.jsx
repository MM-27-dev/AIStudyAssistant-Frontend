import React from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleGetStarted = () => {
    navigate(isAuthenticated ? "/chatdashboard" : "/login");
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/4 border-b border-gray-900 shadow-sm backdrop-blur px-4 sm:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.img
            alt="logo-image"
            src="/logo.svg"
            className="w-8 h-8"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <motion.span
            className="text-xl font-bold text-white"
            whileHover={{ color: "#8b5cf6" }}
          >
            BotBuzz
          </motion.span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </motion.div>
          <motion.button
            onClick={() => {
              const section = document.getElementById("pricing");
              if (section) section.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pricing
          </motion.button>

          <motion.button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get Started
          </motion.button>
        </div>

        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-[#1A1A1F] border border-gray-800 rounded-lg mx-4 p-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </motion.div>
              <motion.button
                onClick={() => {
                  const section = document.getElementById("pricing");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white transition-colors text-left"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing
              </motion.button>

              <motion.button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
