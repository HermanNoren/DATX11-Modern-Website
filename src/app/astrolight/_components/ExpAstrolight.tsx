"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ExpAstrolight() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-end text-right text-gray-900 py-15 pr-10 md:pr-60">
      {/* EXPERIENCE (video) THE */}
      <div
        ref={textRef}
        className="text-5xl md:text-8xl font-light tracking-wide flex items-center gap-2 md:gap-1"
      >
        <span>EXPERIENCE</span>
        {/* Small Video Box */}
        <div className="w-[2em] h-[0.5em] md:w-[1.2em] md:h-[0.8em] rounded-xl shadow-md overflow-hidden flex items-center">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/videos/20250305_1934_Liquid_Steel_Sphere_simple_compose_01jnksddjdf51tj6ac4mdp2erg.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <span>THE</span>
      </div>

      {/* ASTROLIGHT - aligned with THE */}
      <h2 className="text-5xl md:text-8xl font-light tracking-wide mt-0 self-end">
        ASTROLIGHT
      </h2>
    </div>
  );
}
