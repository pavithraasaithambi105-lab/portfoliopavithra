import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  nightMode: boolean;
}

const ParticlesBackground: React.FC<Props> = ({ nightMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    // Change background based on nightMode
    scene.background = new THREE.Color(nightMode ? 0x000000 : 0x1b0033); // black or dark violet

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    /* ---------- Stars ---------- */
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

    /* ---------- Nebula / Gas Clouds ---------- */
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

    /* ---------- Mouse Parallax ---------- */
    let mouseX = 0, mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    /* ---------- Animate ---------- */
    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouseX * 100 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 100 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    /* ---------- Resize ---------- */
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
  }, [nightMode]);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ParticlesBackground;
