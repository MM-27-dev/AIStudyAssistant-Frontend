import {  Bot } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <img alt="logo-image" src="/logo.svg" className="w-8 h-8" />
                <span className="text-xl font-bold">BotBuzz</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your ultimate AI-powered content and conversational companion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pricing</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Plus Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pro Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Others</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            Copyright © 2024. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">Status</span>
            <span className="text-gray-400 text-sm">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
