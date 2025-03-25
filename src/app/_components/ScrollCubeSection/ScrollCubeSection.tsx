"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import CubeScene from "./CubeScene";
import CubeSizes from "./CubeSizes";
import { availableCubeSizes } from "@/utils/cubeSizes";
import Video from "./Video";
import {
  BufferGeometry,
  Group,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";
import { useLenis } from "lenis/react";
import SideScrollVideo from "./SideScrollVideo";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCubeSection(props: {
  children: React.ReactNode;
}) {
  const scrollSectionContainer = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const cube = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
  const cubeGroup = useRef<Group<Object3DEventMap>>(null);

  const [cubeSize, setCubeSize] = useState<availableCubeSizes>(1);
  const cubeSizeRef = useRef<availableCubeSizes>(1);

  const sideBaseRef = useRef(0);
  const downBaseRef = useRef(0);
  const lastDirectionRef = useRef<"down" | "side" | "none">(null);
  const sideScrollProgress = useRef<number>(0);

  const downScroll1 = useRef<HTMLDivElement>(null);
  const downScroll2 = useRef<HTMLDivElement>(null);
  const sideScroll = useRef<HTMLDivElement>(null);

  const isAnimatingCube = useRef<boolean>(false);
  const isFloating = useRef<boolean>(true);
  const rotateDir = useRef<"down" | "side" | "none">("down");

  const currentScroll = useRef<number>(0);

  const onClick = (size: availableCubeSizes) => {
    if (!cube.current) return;
    if (isAnimatingCube.current) return;
    isAnimatingCube.current = true;

    gsap.fromTo(
      cube.current.scale,
      {
        x: cubeSize,
        y: cubeSize,
        z: cubeSize,
      },
      {
        x: size,
        y: size,
        z: size,
        duration: 0.5,
        ease: "Power4.out",
      }
    );
    setTimeout(() => {
      isAnimatingCube.current = false;
    }, 500);
    setCubeSize(size);
    cubeSizeRef.current = size;
  };

  function onScrollIn() {
    isFloating.current = false;
    if (!cube.current) return;

    gsap.to(cube.current.position, {
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(cube.current.scale, {
      x: cubeSizeRef.current,
      y: cubeSizeRef.current,
      z: cubeSizeRef.current,
      duration: 1,
      ease: "power4.inOut",
    });
  }

  function onScrollOut() {
    isFloating.current = true;
    if (!cube.current) return;

    gsap.to(cube.current.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
      ease: "power4.out",
    });
  }

  function sideScrollEnter() {
    rotateDir.current = "side";
  }

  function playInitialScaleAnimation() {
    console.log(cube.current);
    if (!cube.current) return;

    gsap.fromTo(
      cube.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: cubeSizeRef.current,
        y: cubeSizeRef.current,
        z: cubeSizeRef.current,
        duration: 1,
        ease: "power4.out",
      }
    );
  }

  useLenis(({ scroll }) => {
    currentScroll.current = scroll;
  });

  function animate() {
    if (
      !cube.current ||
      !scrollSectionContainer.current ||
      !cubeGroup.current
    ) {
      requestAnimationFrame(animate);
      return;
    }

    const pinnedHeight =
      scrollSectionContainer.current.clientHeight - window.innerHeight;
    const scrollProgress = Math.min(currentScroll.current / pinnedHeight, 1);

    if (rotateDir.current === "down") {
      //cube.current.rotation.x = scrollProgress * Math.PI * 3;
    } else if (rotateDir.current === "side") {
      // If we just switched to "side", record the current Y rotation:
      if (lastDirectionRef.current !== "side") {
        sideBaseRef.current = cube.current.rotation.y;
        lastDirectionRef.current = "side";
      }

      // Add scroll-based rotation on top of that base
      cubeGroup.current.rotation.y =
        sideBaseRef.current + sideScrollProgress.current * Math.PI * 2;

      // Similarly, leave x-rotation alone unless you want to force a specific x
    }

    requestAnimationFrame(animate);
  }

  function initScrollTriggers() {
    if (!cube.current || !cubeGroup.current) {
      requestAnimationFrame(initScrollTriggers);
      return;
    }

    gsap.to(cube.current.rotation, {
      x: 6,
      scrollTrigger: {
        trigger: downScroll1.current,
        start: "top top",
        end: "+=5000em",
        scrub: true,
      },
    });
    gsap.to(cubeGroup.current.rotation, {
      y: 3,
      scrollTrigger: {
        trigger: sideScroll.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.to(cube.current.rotation, {
      x: "+=2",
      scrollTrigger: {
        trigger: downScroll2.current,
        start: "-1250em top",
        end: "350em top",
        scrub: true,
        markers: true,
      },
    });
  }

  useEffect(() => {
    initScrollTriggers();
    //animate();
  }, []);

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

          if (!cube.current) return;
          //cube.current.rotation.x += rotationSpeed;
        },
      });
    },
    {
      scope: scrollSectionContainer,
    }
  );

  return (
    <div ref={scrollSectionContainer} className="relative w-full z-10">
      <div ref={downScroll1} className="relative">
        <div
          ref={sticky}
          className="absolute container inset-0 w-full h-lvh z-10"
        >
          <CubeScene
            cubeSize={cubeSize}
            cubeRef={cube}
            groupRef={cubeGroup}
            isFloating={isFloating}
          />
        </div>
        {props.children}
      </div>

      <div ref={sideScroll} className="relative ">
        <SideScrollVideo
          rotateDir={rotateDir}
          sideScrollProgress={sideScrollProgress}
        />
      </div>

      <div ref={downScroll2} className="relative mt-24">
        <CubeSizes
          onScrollIn={onScrollIn}
          onScrollOut={onScrollOut}
          onClickSm={() => onClick(0.7)}
          onClickMd={() => onClick(1)}
          onClickLg={() => onClick(1.3)}
        />
      </div>
      <Video />
    </div>
  );
}
