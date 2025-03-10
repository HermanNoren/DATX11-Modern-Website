"use client";

import { availableCubeSizes } from "@/utils/cubeSizes";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";

export default function Cube(props: { size: availableCubeSizes }) {
  const mesh = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.2 * delta;
    mesh.current.rotation.z += 0.2 * delta;
  });

  return (
    <group scale={viewport.width / 7}>
      <mesh ref={mesh} scale={[props.size, props.size, props.size]}>
        <boxGeometry />
        <meshPhysicalMaterial
          metalness={1}
          roughness={0.01}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          color="white"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
