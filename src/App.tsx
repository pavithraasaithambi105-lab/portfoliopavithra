import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

type Screen = "home" | "about" | "skills" | "projects" | "contact";

const App = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState<Screen>("home");
  const [nextScreen, setNextScreen] = useState<Screen | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Cursor
  useEffect(() => {
    const cursor = document.getElementById("cursor-main");
    const handleMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Galaxy background
  useEffect(() => {
    if (!bgRef.current) return;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1b0033);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    bgRef.current.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const count = 6000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starsGeometry,
      new THREE.PointsMaterial({ color: 0xbb88ff, size: 2 })
    );
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  // Handle section change with animation
  const handleScreenChange = (screen: Screen) => {
    if (screen === activeScreen || isAnimating) return;
    setIsAnimating(true);
    setNextScreen(screen);
    setTimeout(() => {
      setActiveScreen(screen);
      setIsAnimating(false);
      setNextScreen(null);
    }, 800); // duration of animation
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      <div
        ref={bgRef}
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      />
      <div
        id="cursor-main"
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[9999]"
        style={{
          transform: "translate(-50%, -50%)",
          background: "white",
          boxShadow: "0 0 10px white, 0 0 20px #ff00ff, 0 0 30px #00eaff",
        }}
      />

      {/* Top Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-3 glass px-4 py-2 rounded-full">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleScreenChange(item as Screen)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                activeScreen === item
                  ? "bg-primary text-white"
                  : "text-white/70 hover:text-white"
              }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Screen + AnimatePresence for Framer Motion */}
      <main className="pt-28 px-4 flex justify-center">
        <div className="w-full max-w-7xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>

          {/* Optional star overlay */}
          {isAnimating && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* You can implement canvas particle star animation here */}
              <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] animate-pulse"></div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
