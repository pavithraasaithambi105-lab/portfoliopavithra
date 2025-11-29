import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";
import profilePic from "@/assets/profile.jpg";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  // Mouse Parallax
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

  // tsparticles init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      {/* ⭐ PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 120,
          particles: {
            number: { value: 200 },
            color: { value: "#a855f7" },
            shape: { type: "circle" },
            move: { enable: true, speed: 1, random: true, outModes: { default: "out" }, attract: { rotate: { x: 600, y: 1200 } } },
            opacity: { value: 0.7 },
            size: { value: { min: 1, max: 4 }, animation: { enable: true, speed: 2 } },
            zIndex: { value: { min: -50, max: 50 } },
          },
          detectRetina: true,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 150, links: { opacity: 1 } }, push: { quantity: 5 } },
          },
          perspective: 900,
        }}
      />

      {/* ⭐ MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 md:px-12">

        <motion.div style={parallax(0.02)} className="flex flex-col items-center gap-6">

          {/* ⭐ 3D TILT + CLICK FLIP PROFILE IMAGE */}
          <Tilt glareEnable={true} glareBorderRadius="50%" scale={1.05}>
            <motion.div
              style={parallax(0.05)}
              className="relative w-44 h-44 md:w-56 md:h-56 perspective cursor-pointer"
              onClick={() => setFlipped(!flipped)}
            >
              <motion.div
                className="absolute w-full h-full rounded-full shadow-[0_0_60px_rgba(168,85,247,0.8)] border-[3px] border-purple-400"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: "preserve-3d" }} // ⭐ Fix back visibility
              >
                {/* Front Side */}
                <img
                  src={profilePic}
                  alt="Pavithra"
                  className="absolute w-full h-full rounded-full backface-hidden object-cover"
                  style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                />

                {/* Back Side */}
                <div
                  className="absolute w-full h-full rounded-full backface-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4 text-white text-center"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-sm md:text-base italic">💡 Always learning, always curious!</p>
                </div>
              </motion.div>
            </motion.div>
          </Tilt>

          {/* HEADING */}
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

          {/* SUBHEADING */}
          <motion.p
            style={parallax(0.015)}
            animate={{ y: [0, -3, 0], opacity: [1, 0.8, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-300 text-lg md:text-xl max-w-xl"
          >
            Frontend Developer • UI/UX Enthusiast • React & Web Animations
          </motion.p>

          {/* ⭐ SPECIAL BUTTONS */}
          <motion.div
            style={parallax(0.01)}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex gap-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              See My Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border-2 border-purple-400 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700/30 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* GLOW ANIMATION */}
      <style>{`
        .perspective { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; }

        .animate-pulse-glow {
          box-shadow: 0 0 20px rgba(168,85,247,0.6), 
                      0 0 40px rgba(168,85,247,0.4), 
                      0 0 60px rgba(168,85,247,0.2);
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 20px rgba(168,85,247,0.6), 
                        0 0 40px rgba(168,85,247,0.4), 
                        0 0 60px rgba(168,85,247,0.2);
          }
          100% {
            box-shadow: 0 0 35px rgba(168,85,247,0.8), 
                        0 0 55px rgba(168,85,247,0.5), 
                        0 0 70px rgba(168,85,247,0.3);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
