import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-base-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 shadow-inner relative">
      <div className="mx-auto pl-17 pr-18  flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nusrat Humaira. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/nusrathumaira12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nusrat-humaira-926aa0367/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nusrathumaira12@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition shadow-md"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
