import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ParticlesBackground = () => {
  return (
    <Canvas className="absolute inset-0 -z-20">
      <Stars radius={100} depth={50} count={500} factor={4} fade speed={1} />
    </Canvas>
  );
};

export default ParticlesBackground;
