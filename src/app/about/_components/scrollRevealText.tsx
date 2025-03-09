"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MaskText from "@/components/MastText";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealText() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll(".word-animation");
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="max-w-[60%] mx-auto text-center text-3xl leading-relaxed my-38 opacity-100 overflow-visible" ref={textRef}>
      <p className="inline-block">
        <MaskText stagger={0.002} phrase="deCube is a design-driven company redefining interior aesthetics through sleek, geometric precision. Founded by a collective of cube enthusiasts, we merge artistry and engineering to create objects of pure form and function." />
      </p>
    </div>
  );
}
