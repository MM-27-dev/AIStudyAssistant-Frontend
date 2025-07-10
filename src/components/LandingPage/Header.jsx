import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/4 border-b border-gray-900 shadow-sm backdrop-blur px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img alt="logo-image" src="/logo.svg" className="w-8 h-8" />
          <span className="text-xl font-bold text-white">BotBuzz</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <button
            onClick={() => {
              const section = document.getElementById("pricing");
              if (section) section.scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false); // close mobile menu if open
            }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </button>

          <Link
            to="/chatdashboard"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1A1A1F] border border-gray-800 rounded-lg mx-4 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <button
              onClick={() => {
                const section = document.getElementById("pricing");
                if (section) section.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className="text-gray-300 hover:text-white transition-colors text-left"
            >
              Pricing
            </button>

            <Link
              to="/chatdashboard"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
