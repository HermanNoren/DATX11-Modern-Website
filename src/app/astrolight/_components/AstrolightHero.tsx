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
          src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Animated Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1
          ref={textRef}
          className="text-5xl md:text-9xl font-light tracking-wide"
        >
          deCube
        </h1>
      </div>
    </div>
  );
}

