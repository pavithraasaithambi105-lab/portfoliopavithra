// components/Hero.tsx
import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
  const [isMobile, setIsMobile] = useState(false);
  const [quote, setQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (flipped) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }
  }, [flipped]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
      setQuote(quotes[(quoteIndex + 1) % quotes.length]);
    }, 8000);
    return () => clearInterval(interval);
  }, [quoteIndex]);

  const handleClick = () => setFlipped(!flipped);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black/0 relative overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-white/20 rounded-full animate-float`}
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Side - Profile & Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mb-12 md:mr-24 z-20 gap-8">
        <div
          className="relative w-64 h-64 cursor-pointer perspective hover:scale-105 transition-transform duration-700 flex-shrink-0"
          onClick={handleClick}
        >
          <div className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}>
            {/* Front */}
            <div className="absolute w-full h-full rounded-full overflow-hidden shadow-2xl backface-hidden flex items-center justify-center">
              <div className="absolute -inset-6 rounded-full bg-purple-500/30 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full bg-pink-400/30 blur-4xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-spin-slow blur-xl opacity-60"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
            {/* Back */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 text-white text-center shadow-2xl backface-hidden rotate-y-180">
              <p className="text-sm md:text-lg font-semibold animate-fade-in">"{quote}"</p>
            </div>
          </div>
        </div>

        {/* Name, Title & Social */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-xl animate-slide-up font-hero">
            PAVITHRA A
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 text-shadow-sm animate-slide-up animate-delay-200">
            Frontend Developer | React Enthusiast
          </p>

          {/* Buttons - only Resume */}
          {!isMobile && (
            <div className="flex gap-4 flex-wrap animate-slide-up animate-delay-400 mt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-indigo-600/80 hover:bg-indigo-500 rounded-full font-semibold text-white transition"
              >
                View My Resume
              </a>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/pavithraasaithambi105-lab" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition transform hover:-translate-y-1">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/PAVITHRA A,. B.E(CSE),." target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition transform hover:-translate-y-1">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition transform hover:-translate-y-1">
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Tech Icons */}
      {!isMobile && (
        <div className="relative w-96 h-96 z-10">
          {/* Inner Circle */}
          <div className="absolute inset-0 animate-spin-super-slow">
            {[
              { icon: <FaReact size={50} />, angle: 0, color: "text-cyan-400" },
              { icon: <FaJsSquare size={50} />, angle: 90, color: "text-yellow-400" },
              { icon: <FaHtml5 size={50} />, angle: 180, color: "text-orange-500" },
              { icon: <FaCss3Alt size={50} />, angle: 270, color: "text-blue-500" },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center hover:animate-bounce-slow"
                style={{ transform: `rotate(${item.angle}deg) translateX(160px) rotate(-${item.angle}deg)` }}
              >
                <div className={`tech-icon ${item.color}`}>{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Outer Circle */}
          <div className="absolute inset-0 animate-spin-super-slow-reverse">
            {[
              { icon: <SiTailwindcss size={48} />, angle: 0, color: "text-sky-400" },
              { icon: <FaNodeJs size={48} />, angle: 72, color: "text-green-500" },
              { icon: <FaPython size={48} />, angle: 144, color: "text-yellow-300" },
              { icon: <SiDocker size={48} />, angle: 216, color: "text-blue-400" },
              { icon: <SiFigma size={48} />, angle: 288, color: "text-pink-400" },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center hover:animate-bounce-slow"
                style={{ transform: `rotate(${item.angle}deg) translateX(260px) rotate(-${item.angle}deg)` }}
              >
                <div className={`tech-icon ${item.color}`}>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
      )}

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
          background: rgba(0,0,0,0.25);
          padding: 12px;
          border-radius: 9999px;
        }

        .animate-fade-in { animation: fade-in 1.5s ease forwards; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .animate-slide-up { animation: slide-up 1s ease forwards; }
        .animate-delay-200 { animation-delay: 0.2s; }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        @keyframes spin-super-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-super-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-super-slow { animation: spin-super-slow 40s linear infinite; }
        .animate-spin-super-slow-reverse { animation: spin-super-slow-reverse 60s linear infinite; }

        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }

        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
        .animate-float { animation: float infinite ease-in-out; }

        @keyframes bounce-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .hover\\:animate-bounce-slow:hover { animation: bounce-slow 0.6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
