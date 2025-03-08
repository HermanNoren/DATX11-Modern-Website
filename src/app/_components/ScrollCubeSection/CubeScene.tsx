"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Cube from "./Cube";
import { availableCubeSizes } from "@/utils/cubeSizes";

export default function CubeScene(props: { cubeSize: availableCubeSizes }) {
  return (
    <Canvas>
      <Cube size={props.cubeSize} />
      <Environment /*files="/skybox.exr"*/ preset="studio" />
    </Canvas>
  );
}
