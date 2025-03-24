"use client";

import Button from "@/components/Button";
import TransitionLink from "@/components/header/TransitionLink";
import MaskText from "@/components/MaskText";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Astrolight() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cubes = gridRef.current?.querySelectorAll(".cube");
    if (!cubes) return;

    const maxDistance = 150;

    const handleMouseMove = (e: MouseEvent) => {
      cubes.forEach((cube) => {
        const el = cube as HTMLElement;
        const rect = el.getBoundingClientRect();
        const dx = rect.left + rect.width / 2 - e.clientX;
        const dy = rect.top + rect.height / 2 - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const force = Math.max((maxDistance - distance) / maxDistance, 0);
        const directionX = dx / distance || 0;
        const directionY = dy / distance || 0;

        const moveDistance = force * 60;
        const offsetX = directionX * moveDistance;
        const offsetY = directionY * moveDistance;

        gsap.to(el, {
          x: offsetX,
          y: offsetY,
          scale: 1 + force * 0.3,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    const resetPosition = () => {
      gsap.to(cubes, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: {
          amount: 0.4,
          from: "center",
        },
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetPosition);
    };
  }, []);

  function createAstrolights(length: number) {
    return (
      <>
        {Array.from({ length: length }).map((_, index) => (
          <div
            key={index}
            className="cube w-10 aspect-square will-change-transform pointer-events-none select-none"
          >
            <img
              src="/astrolight 3d.png"
              alt="Astrolight Cube"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <section className="relative w-screen gradient-bg z-20 py-72">
      <div className=" w-full h-full grid place-items-center">
        <div
          ref={gridRef}
          className="container relative z-20 grid grid-cols-24 grid-rows-12 place-items-center gap-4"
        >
          {createAstrolights(24 * 3 + 9)}
          <h3 className="z-40 uppercase col-span-6">
            <MaskText phrase="Exclusive materials since 1998" />
          </h3>
          {createAstrolights(14)}
          <h2 className="text-8xl text-center uppercase col-span-14 row-span-2">
            <MaskText phrase="Experience the" />
          </h2>
          {createAstrolights(21)}
          <div className=""></div>
          <h2 className="text-8xl text-center uppercase col-span-10 row-span-2">
            <MaskText phrase="Astrolight" />
          </h2>
          <div className=""></div>
          {createAstrolights(31)}
          <TransitionLink href="/astrolight" className="col-span-2">
            <Button text="Read more" className="uppercase" animateIn />
          </TransitionLink>
          {createAstrolights(24 * 3 + 11)}
        </div>
      </div>
    </section>
  );
}
