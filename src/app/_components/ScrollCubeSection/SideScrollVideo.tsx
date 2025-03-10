"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

import cubes from "@/imgs/gifs/three_cubes.gif";

gsap.registerPlugin(ScrollTrigger);

export default function SideScrollVideo() {
  const section = useRef<HTMLElement>(null);
  const sideScrollDiv = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (sideScrollDiv.current && section.current) {
        const scrollWidth = sideScrollDiv.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = scrollWidth - viewportWidth;

        gsap.to(sideScrollDiv.current, {
          x: `-${scrollDistance}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 1,
          },
        });
      }
    },
    {
      scope: section,
    }
  );

  return (
    <section
      ref={section}
      className="relative h-[160em] z-20 pointer-events-none"
    >
      <div className="sticky top-0 left-0 overflow-hidden">
        <div
          ref={sideScrollDiv}
          className="relative w-[195em] h-lvh p-[var(--container-padding)]"
        >
          <div className="grid grid-cols-2 w-full">
            <h3 className="relative text-[12em] leading-[1em] z-30 w-[4.5em] uppercase">
              Three Dimension
            </h3>
            <h3 className="relative text-[12em] leading-[1em] z-30 uppercase text-end">
              Three sizes
            </h3>
          </div>

          <div className="absolute w-screen h-screen top-0 left-[27%] p-[var(--container-padding)]">
            <div className="relative w-full h-full bg-neutral-600">
              <Image src={cubes} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
