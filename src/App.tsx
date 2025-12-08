import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import * as THREE from "three";

const App = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [direction, setDirection] = useState(0);

  const sections = ["hero", "about", "skills", "projects", "contact"];

  const handleSectionClick = (id: string) => {
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = sections.indexOf(id);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(id);
  };

  // Cursor
  useEffect(() => {
    const cursor = document.getElementById("cursor-main");
    const handleMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
      const trail = document.createElement("div");
      trail.className = "rainbow-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 500);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Three.js Galaxy Background (same as previous)
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

    const starCount = 5000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const t = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 1.5) * 800;
      starPositions[i * 3] = Math.cos(t) * radius + (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 1] = Math.sin(t) * radius + (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      const color = new THREE.Color(`hsl(270, 80%, ${50 + Math.random() * 20}%)`);
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const nebulaCount = 1500;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1000;
      nebulaPositions[i * 3] = Math.cos(angle) * radius;
      nebulaPositions[i * 3 + 1] = Math.sin(angle) * radius;
      nebulaPositions[i * 3 + 2] = (Math.random() - 0.5) * 400;
      const color = new THREE.Color(`hsl(270, 60%, ${10 + Math.random() * 20}%)`);
      nebulaColors[i * 3] = color.r;
      nebulaColors[i * 3 + 1] = color.g;
      nebulaColors[i * 3 + 2] = color.b;
    }
    nebulaGeometry.setAttribute("position", new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute("color", new THREE.BufferAttribute(nebulaColors, 3));
    const nebulaMaterial = new THREE.PointsMaterial({
      size: 10,
      vertexColors: true,
      transparent: true,
      opacity: 0.06,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);

    let mouseX = 0,
      mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouseX * 100 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 100 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      renderer.dispose();
    };
  }, []);

  // Slide animation variants
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 500 : -500, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 500 : -500, opacity: 0 }),
  };

  const sectionComponents: Record<string, JSX.Element> = {
    hero: <Hero />,
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Galaxy Background */}
      <div ref={bgRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />

      {/* Cursor */}
      <div
        id="cursor-main"
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[99999]"
        style={{
          transform: "translate(-50%, -50%)",
          background: "white",
          boxShadow:
            "0 0 10px white, 0 0 20px #ff00ff, 0 0 35px #00eaff, 0 0 50px white",
        }}
      />

      {/* Top Buttons */}
      <div className="fixed top-4 right-4 z-[9999] flex gap-3">
        {sections.map((section) => (
          <motion.button
            key={section}
            onClick={() => handleSectionClick(section)}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 0 20px #ff00ff, 0 0 40px #00eaff",
            }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            className="px-4 py-2 bg-[#1b0033]/70 rounded-full text-white font-semibold backdrop-blur-sm shadow-md transition-all duration-300"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Sliding Sections */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={activeSection}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full flex justify-center items-start"
        >
          {sectionComponents[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
