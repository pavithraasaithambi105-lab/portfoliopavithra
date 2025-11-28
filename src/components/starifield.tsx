import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const Stars = () => {
  const ref = useRef<THREE.Points>(null!);

  // Generate 2000 stars
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 300;
    }
    return arr;
  }, []);

  // Mouse reactive movement
  useFrame(({ mouse }) => {
    ref.current.rotation.x = mouse.y * 0.4;
    ref.current.rotation.y = mouse.x * 0.4;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        color="#00ffff"
        size={1.2}
        sizeAttenuation
        transparent
      />
    </Points>
  );
};

const Starfield = () => {
  return (
    <Canvas
      className="fixed inset-0 -z-10 pointer-events-none"
      camera={{ position: [0, 0, 75], fov: 75 }}
    >
      <Stars />
    </Canvas>
  );
};

export default Starfield;
