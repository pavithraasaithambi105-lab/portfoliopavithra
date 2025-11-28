import React from "react";
import { motion } from "framer-motion";
import profilePic from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
        >

          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[3px] border-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
            <img
              src={profilePic}
              alt="Pavithra"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg">
            Hey, I’m <span className="text-purple-400">Pavithra</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            Frontend Developer • UI/UX Enthusiast • React & Web Animations
          </p>

          <div className="flex gap-4 mt-4">

            {/* ✅ Open Resume in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-lg text-lg font-semibold text-white shadow-lg"
            >
              See My Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-400 hover:bg-purple-700/30 transition rounded-lg text-lg font-semibold text-white"
            >
              Contact Me
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
