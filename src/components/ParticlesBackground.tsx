import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ParticlesBackground = () => {
  return (
    <Canvas
      className="absolute inset-0 -z-20"
      camera={{ position: [0, 0, 100], fov: 75 }}
    >
      {/* Stars: radius controls spread, depth controls 3D depth, speed controls star drift */}
      <Stars
        radius={150}      // spread of stars
        depth={50}        // how far stars extend in Z
        count={800}       // number of stars
        factor={4}        // star size scaling
        fade={true}       // stars fade toward edges
        speed={0.2}       // slow movement for subtle animation
      />
    </Canvas>
  );
};

export default ParticlesBackground;
