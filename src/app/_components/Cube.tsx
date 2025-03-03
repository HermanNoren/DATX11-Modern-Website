"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube() {
  const mesh = useRef(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    mesh.current.rotation.y += 0.2 * delta;
    mesh.current.rotation.z += 0.2 * delta;
  });

  return (
    <group scale={viewport.width / 5}>
      <mesh ref={mesh}>
        <boxGeometry />
        <meshPhysicalMaterial
          metalness={1}
          roughness={1}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          color="silver"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
