"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    } else {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial
        color="#fff"
        roughness={0}
        transmission={1}
        thickness={0.1}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0}
        opacity={0.5}
        transparent={true}
        emissive="blue"
        emissiveIntensity={5}
      />
    </mesh>
  );
}

export default function MyModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight intensity={2} position={[2, 2, 2]} color="blue"/>
      <Cube />
    </Canvas>
  );
}
