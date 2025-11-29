import React, { useEffect } from "react";
import ParticleBackground from "./components/Particlebackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // ⭐ Added Skills section
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    const mainCursor = document.getElementById("cursor-main");
    const followerCursor = document.getElementById("cursor-follower");

    const trailElements: HTMLDivElement[] = [];

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Move main cursor instantly
      if (mainCursor) {
        mainCursor.style.left = `${x}px`;
        mainCursor.style.top = `${y}px`;
      }

      // Move follower smoothly
      if (followerCursor) {
        followerCursor.style.left = `${x}px`;
        followerCursor.style.top = `${y}px`;
      }

      // Create rainbow trail
      const trail = document.createElement("div");
      trail.className = "comet-trail";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);
      trailElements.push(trail);

      setTimeout(() => {
        trail.remove();
        trailElements.shift();
      }, 500); // match trail animation
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent">
      {/* ⭐ CURSOR ELEMENTS */}
      <div
        id="cursor-main"
        className="w-4 h-4 rounded-full fixed pointer-events-none z-[9999] bg-white shadow-[0_0_10px_white_0_0_20px_white]"
      ></div>
      <div
        id="cursor-follower"
        className="w-8 h-8 rounded-full fixed pointer-events-none z-[9998] bg-white/30"
      ></div>

      {/* ⭐ PARTICLE BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* ⭐ MAIN CONTENT */}
      <main className="relative z-10 flex flex-col gap-20 px-4 md:px-10 bg-transparent">
        <Hero />
        <About />
        <Skills /> {/* ⭐ Skills section included */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
