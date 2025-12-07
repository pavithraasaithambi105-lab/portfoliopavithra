import React, { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import * as THREE from "three";

const App = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  /* -----------------------------
     🌈 Neon Comet Cursor
  ----------------------------- */
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

  /* -----------------------------
     🌌 Static Galaxy Background
  ----------------------------- */
  useEffect(() => {
    if (!bgRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1b0033); // dark violet

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

    // Stars
    const starCount = 7000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const t = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 1.5) * 800;
      const x = Math.cos(t) * radius + (Math.random() - 0.5) * 20;
      const y = Math.sin(t) * radius + (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 200;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

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

    // Nebula / Gas clouds
    const nebulaCount = 2000;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1000;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 400;

      nebulaPositions[i * 3] = x;
      nebulaPositions[i * 3 + 1] = y;
      nebulaPositions[i * 3 + 2] = z;

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

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      camera.position.x += (mouseX * 100 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 100 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
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

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div
        ref={bgRef}
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      />

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

      <main className="relative z-10 flex flex-col gap-20 px-4 md:px-10 py-10 text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
