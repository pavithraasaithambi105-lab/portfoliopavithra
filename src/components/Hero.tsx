import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiDocker, SiFigma } from "react-icons/si";

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "In the middle of difficulty lies opportunity.",
  "Dream big and dare to fail.",
  "Do what you can, with what you have, where you are.",
];

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center min-h-screen px-4 md:px-16 bg-transparent">

      {/* Mobile toggle button */}
      <button
        className="absolute top-4 right-4 md:hidden px-3 py-1 rounded-full bg-indigo-500 text-white text-sm font-semibold z-50"
        onClick={() => setMobileView(!mobileView)}
      >
        Toggle Mobile View
      </button>

      {/* Left Side - Profile + Name + Buttons */}
      <div className={`flex flex-col items-center md:items-start justify-center mb-8 md:mr-20 ${mobileView ? "order-2" : ""}`}>
        <div
          className="relative w-64 h-64 cursor-pointer perspective hover:scale-105 transition-transform duration-500"
          onClick={handleClick}
        >
          <div className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${flipped ? "rotate-y-180" : ""}`}>
            <div className="absolute w-full h-full rounded-full overflow-hidden shadow-2xl backface-hidden flex items-center justify-center">
              <div className="absolute -inset-6 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full bg-pink-400/20 blur-4xl animate-pulse"></div>
              <div className="absolute -inset-10 rounded-full bg-cyan-400/20 blur-5xl animate-pulse"></div>

              <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-spin-slow blur-xl opacity-80"></div>
              <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-spin-slow-reverse blur-2xl opacity-70"></div>
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping blur-xl opacity-60"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                />
              </div>
            </div>

            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 text-white text-center shadow-2xl backface-hidden rotate-y-180">
              <p className="text-sm md:text-lg font-semibold">
                "{quotes[Math.floor(Math.random() * quotes.length)]}"
              </p>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-3 text-white text-shadow-xl animate-pulse font-hero">
          PAVITHRA A
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300 text-shadow-sm">
          Frontend Developer | React Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-indigo-600/80 hover:bg-indigo-500 rounded-full font-semibold text-white transition"
          >
            View My Resume
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Side - Two Circles of Icons */}
      <div className={`relative ${mobileView ? "hidden" : "md:block"} w-96 h-96`}>
        {/* Inner Circle */}
        <div className="absolute inset-0 animate-spin-super-slow">
          {[
            { icon: <FaReact size={60} />, angle: 0, color: "text-cyan-400" },
            { icon: <FaJsSquare size={60} />, angle: 90, color: "text-yellow-400" },
            { icon: <FaHtml5 size={60} />, angle: 180, color: "text-orange-500" },
            { icon: <FaCss3Alt size={60} />, angle: 270, color: "text-blue-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg)` }}
            >
              <div className={`tech-icon ${item.color}`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Outer Circle */}
        <div className="absolute inset-0 animate-spin-super-slow-reverse">
          {[
            { icon: <SiTailwindcss size={56} />, angle: 0, color: "text-sky-400" },
            { icon: <FaNodeJs size={56} />, angle: 72, color: "text-green-500" },
            { icon: <FaPython size={56} />, angle: 144, color: "text-yellow-300" },
            { icon: <SiDocker size={56} />, angle: 216, color: "text-blue-400" },
            { icon: <SiFigma size={56} />, angle: 288, color: "text-pink-400" },
          ].map((item, index) => (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: `rotate(${item.angle}deg) translateX(220px) rotate(-${item.angle}deg)` }}
            >
              <div className={`tech-icon ${item.color}`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .text-shadow-xl { text-shadow: 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff; }
        .text-shadow-sm { text-shadow: 0 0 3px #fff, 0 0 6px #ff00ff; }

        .tech-icon {
          filter: drop-shadow(0 0 12px currentColor);
          transition: transform 0.3s ease;
          background: rgba(0,0,0,0.45);
          padding: 16px;
          border-radius: 9999px;
        }

        .tech-icon:hover { transform: scale(1.3); }

        @keyframes spin-super-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-super-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

        .animate-spin-super-slow { animation: spin-super-slow 40s linear infinite; }
        .animate-spin-super-slow-reverse { animation: spin-super-slow-reverse 60s linear infinite; }

        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
