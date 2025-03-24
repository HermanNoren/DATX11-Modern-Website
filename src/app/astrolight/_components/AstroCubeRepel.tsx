"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AstroCubeRepel() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cubes = gridRef.current?.querySelectorAll(".cube");
    if (!cubes) return;

    const maxDistance = 150;

    const handleMouseMove = (e: MouseEvent) => {
      cubes.forEach((cube) => {
        const el = cube as HTMLElement;
        const rect = el.getBoundingClientRect();
        const dx = (rect.left + rect.width / 2) - e.clientX;
        const dy = (rect.top + rect.height / 2) - e.clientY;
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
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    const resetPosition = () => {
      gsap.to(cubes, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
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

  return (
    <section className="relative w-full isolate overflow-visible bg-white z-20">
      <div className="flex flex-col items-center justify-center min-h-[150vh] py-[var(--section-padding)] px-4 sm:px-6 lg:px-8 bg-transparent">
        {/* Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center opacity-10 text-[var(--color-foreground)] pointer-events-none overflow-visible z-0 bg-transparent">
          <span className="text-[24vw] font-bold leading-none tracking-tight whitespace-nowrap text-left">
            PERFECTION
          </span>
          <span className="text-[24vw] font-bold leading-none tracking-tight whitespace-nowrap text-center">
            PERFECTION
          </span>
          <span className="text-[24vw] font-bold leading-none tracking-tight whitespace-nowrap text-right">
            PERFECTION
          </span>
        </div>

        {/* Grid of Astrolight Cubes */}
        <div
          ref={gridRef}
          className="grid grid-cols-10 grid-rows-10 gap-2 z-10 bg-transparent pointer-events-none select-none"
        >
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="cube w-10 aspect-square will-change-transform bg-transparent"
            >
              <img
                src="/astrolight 3d.png"
                alt="Astrolight Cube"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
