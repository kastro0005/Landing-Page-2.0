//import { ChevronRight } from "lucide-react";

import React from "react";
import { Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm mb-4">Always on touch</p>
            <div className="flex space-x-4">
              <Linkedin size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-2/3">
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/3 mb-6">
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff]">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <form className="mb-4">
            <h3 className="text-lg font-semibold mb-3">
              Subscribe for personalized insights and news
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full"
              />
              <button
                type="submit"
                className="bg-[#ff00ff] text-white px-4 py-2 rounded-r-md hover:bg-[#cc00cc]"
              >
                →
              </button>
            </div>
          </form>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Sierra-Esperanza Creations.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ in West Palm Beach.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
