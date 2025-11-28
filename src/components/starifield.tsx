import React, { useEffect, useRef } from "react";

// 🌌 DENSE STARFIELD WITH CURSOR PARALLAX ONLY
export default function StarfieldBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let mouseX = w / 2;
    let mouseY = h / 2;

    // ⭐ Create more stars
    const stars = Array(600) // Increased from 300 to 600
      .fill()
      .map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2,
        glow: Math.random() * 0.7 + 0.3, // shadow intensity
      }));

    const draw = () => {
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, "#0d0d1a");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((star) => {
        // Only move stars based on cursor (parallax)
        const parallaxX = ((mouseX - w / 2) * star.size) / 20;
        const parallaxY = ((mouseY - h / 2) * star.size) / 20;

        // Glow shadow
        ctx.shadowColor = `rgba(255, 255, 255, ${star.glow})`;
        ctx.shadowBlur = 6;

        ctx.fillStyle = "white";
        ctx.fillRect(star.x + parallaxX, star.y + parallaxY, star.size, star.size);
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ cursor: "auto", pointerEvents: "none" }}
    />
  );
}
