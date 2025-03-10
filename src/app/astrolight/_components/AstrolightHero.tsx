/* astrolight hero*/
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AstrolightHero() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
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

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-center px-4">
        <h1
          ref={textRef}
          className="text-5xl md:text-[12em] font-light tracking-wide"
        >
          deCube.
        </h1>
      </div>
    </div>
  );
}

