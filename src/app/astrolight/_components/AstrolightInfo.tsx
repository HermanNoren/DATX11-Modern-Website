"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MaskText from "@/components/MastText"; // Assuming MaskText is in components

gsap.registerPlugin(ScrollTrigger);

export default function AstrolightInfo() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Scroll Animation for Text
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

    // GSAP Magnetic Effect for Image
    const image = imageRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (image) {
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(image, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const resetPosition = () => {
      if (image) {
        gsap.to(image, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetPosition);
    };
  }, []);

  return (
    <section className="container py-[var(--section-padding)] flex flex-col md:flex-row justify-center items-start gap-[calc(var(--gap)*10)] mx-auto">
      {/* Left Side - Animated Text Content */}
      <div className="w-full md:w-1/4 text-left text-[var(--color-foreground)]" ref={textRef}>
        <p className="text-[var(--text-lg)] leading-[var(--text-lg--line-height)] word-animation">
          <MaskText stagger={0.002} phrase="ASTROLITE—A CELESTIAL ALLOY UNEARTHED FROM THE DEPTHS OF SPACE, FORGED INTO PERFECT CUBES OF UNYIELDING BRILLIANCE." />
        </p>
        <p className="mt-[calc(var(--spacing)*1.5)] text-[var(--text-lg)] leading-[var(--text-lg--line-height)] word-animation">
          <MaskText stagger={0.002} phrase="A MATERIAL BORN FROM COSMIC VIOLENCE, SHAPED BY EXTREME FORCES BEYOND EARTH’S REACH. ITS METALLIC SURFACE CAPTURES LIGHT IN A WAY UNLIKE ANYTHING FOUND IN NATURE, REFLECTING A SUBTLE, OTHERWORLDLY GLOW." />
        </p>
        <p className="mt-[calc(var(--spacing)*1.5)] text-[var(--text-lg)] leading-[var(--text-lg--line-height)] word-animation">
          <MaskText stagger={0.002} phrase="DISCOVERED ON ASTEROID RYUGU AND BROUGHT BACK THROUGH A GROUNDBREAKING MISSION, IT STANDS AS A TESTAMENT TO HUMAN INGENUITY AND THE RELENTLESS PURSUIT OF THE EXCEPTIONAL." />
        </p>
      </div>

      {/* Right Side - Static Frame with Magnetic Image */}
      <div className="relative w-full max-w-sm md:max-w-md flex justify-end">
        {/* Static Frame - Taller than Wide */}
        <div className="absolute w-[80%] h-[110%] border-2 border-[var(--color-foreground)] pointer-events-none"></div>

        {/* Moving Image inside Independent Frame */}
        <div ref={imageRef} className="relative w-full h-auto overflow-hidden">
          <img
            src="/astrolight 3d.png"
            alt="Astrolight metal"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
