import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "@/assets/profile.jpg";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallax = (factor) => ({
    x: mousePos.x * factor,
    y: mousePos.y * factor,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 md:px-12">
        
        <motion.div
          style={parallax(0.02)}
          className="flex flex-col items-center gap-6"
        >
          {/* Profile picture with continuous glow + floating */}
          <motion.div
            style={parallax(0.05)}
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.05, 1], // subtle pulse
              y: [0, -10, 0], // floating up and down
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.8)] border-[3px] border-purple-400"
          >
            {/* Glow animation */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"></div>
            <img
              src={profilePic}
              alt="Pavithra"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            style={parallax(0.03)}
            animate={{
              y: [0, -5, 0],
              textShadow: [
                "0 0 10px #a855f7, 0 0 20px #a855f7",
                "0 0 20px #a855f7, 0 0 40px #a855f7",
                "0 0 10px #a855f7, 0 0 20px #a855f7",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg"
          >
            Hey, I’m <span className="text-purple-400">Pavithra</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            style={parallax(0.015)}
            animate={{
              y: [0, -3, 0],
              opacity: [1, 0.8, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-xl"
          >
            Frontend Developer • UI/UX Enthusiast • React & Web Animations
          </motion.p>

          {/* Buttons */}
          <motion.div
            style={parallax(0.01)}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex gap-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-lg text-lg font-semibold text-white shadow-lg"
            >
              See My Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border border-purple-400 hover:bg-purple-700/30 transition rounded-lg text-lg font-semibold text-white"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Glow animation style */}
      <style>{`
        .animate-pulse-glow {
          box-shadow: 0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.2);
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.2); }
          100% { box-shadow: 0 0 35px rgba(168,85,247,0.8), 0 0 55px rgba(168,85,247,0.5), 0 0 70px rgba(168,85,247,0.3); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
