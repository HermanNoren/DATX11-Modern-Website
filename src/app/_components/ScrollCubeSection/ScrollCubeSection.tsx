"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Cube from "./Cube";
import CubeScene from "./CubeScene";
import CubeSizes from "./CubeSizes";
import { availableCubeSizes } from "@/utils/cubeSizes";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCubeSection(props: {
  children: React.ReactNode;
}) {
  const scrollSectionContainer = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const sizeBorder = useRef<HTMLDivElement>(null);

  const [cubeSize, setCubeSize] = useState<availableCubeSizes>(1);

  const onClick = (size: availableCubeSizes) => {
    setCubeSize(size);
  };

  useGSAP(
    () => {
      if (!scrollSectionContainer.current) return;

      const pinnedHeight =
        scrollSectionContainer.current.clientHeight - window.innerHeight;

      ScrollTrigger.create({
        trigger: sticky.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          //console.log(progress);

          if (progress >= 0.6 && progress <= 0.65) {
            const scaleProgress = gsap.utils.mapRange(
              0.6,
              0.65,
              0,
              1,
              progress
            );

            const newScale = gsap.utils.interpolate(0, 1, scaleProgress);

            gsap.set(sizeBorder.current, { scale: newScale });
          }
        },
      });
    },
    {
      scope: scrollSectionContainer,
    }
  );
  return (
    <div ref={scrollSectionContainer} className="relative w-full">
      <div
        ref={sticky}
        className="absolute container inset-0 w-full h-lvh z-10"
      >
        <CubeScene cubeSize={cubeSize} />
      </div>
      {props.children}
      <div className="my-24">
        <CubeSizes
          onClickSm={() => onClick(0.7)}
          onClickMd={() => onClick(1)}
          onClickLg={() => onClick(1.3)}
        />
      </div>
    </div>
  );
}
