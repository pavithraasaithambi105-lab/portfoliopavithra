import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ⭐ Global Starfield Background
import Starfield from "@/components/starifield";

const queryClient = new QueryClient();

const App = () => {
  /* 🌈 COMET CURSOR EFFECT */
  useEffect(() => {
    const cursor = document.getElementById("comet-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;

      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;

      const trail = document.createElement("div");
      trail.className = "comet-trail";
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;

      document.body.appendChild(trail);

      setTimeout(() => trail.remove(), 400);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* ⭐ FULL WEBSITE STARFIELD (always in the background) */}
        <Starfield />

        {/* ⭐ COMET CURSOR FOLLOWER */}
        <div id="comet-cursor"></div>

        {/* ⭐ MAIN APP CONTENT ABOVE STARFIELD */}
        <div className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
