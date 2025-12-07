import React, { useState } from "react";
import profile from "../assets/profile.jpg";

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "In the middle of difficulty lies opportunity.",
  "Dream big and dare to fail.",
  "Do what you can, with what you have, where you are.",
];

const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <section className="relative flex min-h-screen px-4 justify-center items-center bg-transparent">
      {/* Left Side - Profile & Text */}
      <div className="flex flex-col items-center justify-center text-center max-w-lg mr-20">
        {/* Flip Card Profile */}
        <div
          className="relative w-64 h-64 cursor-pointer perspective mb-8 hover:scale-105 transition-transform duration-500"
          onClick={handleClick}
        >
          <div
            className={`relative w-full h-full duration-700 transform-style-preserve-3d transition-transform ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side with Neon Glow */}
            <div className="absolute w-full h-full rounded-full overflow-hidden shadow-2xl backface-hidden flex items-center justify-center">
              
              {/* Outer Neon Glow Halo */}
              <div className="absolute -inset-6 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full bg-pink-400/20 blur-4xl animate-pulse"></div>
              <div className="absolute -inset-10 rounded-full bg-cyan-400/20 blur-5xl animate-pulse"></div>

              {/* Rotating Neon Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-spin-slow blur-xl opacity-80"></div>
              <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-spin-slow-reverse blur-2xl opacity-70"></div>
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-ping blur-xl opacity-60"></div>

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                />
              </div>
            </div>

            {/* Back Side - Quote */}
            <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 text-white text-center shadow-2xl backface-hidden rotate-y-180">
              <p className="text-sm md:text-lg font-semibold">
                "{quotes[Math.floor(Math.random() * quotes.length)]}"
              </p>
            </div>
          </div>
        </div>

        {/* Name with Neon Glow */}
        <h1 className="text-5xl md:text-7xl font-bold mb-3 text-white text-shadow-xl animate-pulse">
          Pavithra A
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl mb-6 text-gray-300 text-shadow-sm">
          Frontend Developer | React Enthusiast
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-indigo-600/80 hover:bg-indigo-500 rounded-full font-semibold text-white transition"
          >
            View My Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white rounded-full font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side - 3D Animation Placeholder */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-60 h-60">
        {/* Your 3D canvas or animation goes here */}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .text-shadow-xl {
          text-shadow: 0 0 5px #fff, 0 0 10px #ff00ff, 0 0 20px #ff00ff,
            0 0 30px #ff00ff, 0 0 40px #ff00ff;
        }
        .text-shadow-sm {
          text-shadow: 0 0 3px #fff, 0 0 6px #ff00ff;
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slow-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
