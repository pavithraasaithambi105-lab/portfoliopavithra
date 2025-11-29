import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            distance: 120,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
