"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MaskText from "@/components/MastText";
import ParallaxVideo from "@/components/ParallaxVideo" 

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const leftTextRef = useRef<HTMLParagraphElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const animateText = (element: HTMLParagraphElement | null) => {
      if (element) {
        const words = element.querySelectorAll(".word-animation");
        gsap.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    };

    animateText(leftTextRef.current);
    animateText(rightTextRef.current);
  }, []);

  return (
    <div className="relative grid grid-cols-[1fr_895px_1fr] w-full my-15 gap-4">
      {/* Left side text with staggered reveal effect */}
      <div className="w-full flex justify-end">
        <p
          ref={leftTextRef}
          className="relative text-end text-base md:text-lg lg:text-xs w-[12em] leading-relaxed hidden xl:block"
        >
          <MaskText
            stagger={0.002}
            delay={0.7}
            phrase="OUR TEAM IS OBSESSED WITH MINIMALISM, SYMMETRY, AND MATERIAL INNOVATION—PUSHING THE BOUNDARIES OF DESIGN TO DELIVER PIECES THAT EMBODY SOPHISTICATION AND EXCLUSIVITY."
          />
        </p>
      </div>

      {/* Video Container */}
      <div className="relative w-[895px] h-[465px]  overflow-hidden shadow-lg">
        <ParallaxVideo src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4"/> 
    
      </div>

      {/* Right side text with staggered reveal effect */}
      <div className="w-full flex items-end">
        <p
          ref={rightTextRef}
          className="relative md:text-lg lg:text-xs w-[11em] leading-relaxed hidden xl:block"
        >
          <MaskText
            stagger={0.002}
            delay={0.7}
            phrase="TO REFLECT ITS EXCEPTIONAL CRAFTSMANSHIP, EACH DECUBE ARRIVES IN BESPOKE PACKAGING WITH A CERTIFICATE OF AUTHENTICITY—A MARK OF ITS RARITY AND PRESTIGE."
          />
        </p>
      </div>
    </div>
  );
}
