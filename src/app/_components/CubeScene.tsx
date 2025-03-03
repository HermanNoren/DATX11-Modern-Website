"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Cube from "./Cube";

export default function CubeScene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <Cube />
      <Environment files="/skybox.exr" />
    </Canvas>
  );
}
