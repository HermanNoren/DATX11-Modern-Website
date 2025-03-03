"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Cube from "./Cube";

export default function CubeScene() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <Cube />
      <Environment preset="studio" />
    </Canvas>
  );
}
