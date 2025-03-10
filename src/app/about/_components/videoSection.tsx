"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MaskText from "@/components/MastText";

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
    <div className="relative flex items-center justify-center w-full max-w-screen-lg mx-auto my-15">
      {/* Left side text with staggered reveal effect */}
      <p
        ref={leftTextRef}
        className="absolute left-[-200px] top-0 text-right text-base md:text-lg lg:text-xs max-w-[250px] leading-relaxed hidden xl:block"
      >
        <MaskText
          stagger={0.002}
          phrase="OUR TEAM IS OBSESSED WITH MINIMALISM, SYMMETRY, AND MATERIAL INNOVATION—PUSHING THE BOUNDARIES OF DESIGN TO DELIVER PIECES THAT EMBODY SOPHISTICATION AND EXCLUSIVITY."
        />
      </p>

      {/* Video Container */}
      <div className="relative w-[895px] h-[465px] rounded-2xl overflow-hidden shadow-lg">
        <video className="w-full h-full object-cover rounded-2xl" autoPlay loop muted playsInline>
          <source src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right side text with staggered reveal effect */}
      <p
        ref={rightTextRef}
        className="absolute right-[-200px] bottom-0 text-left text-base md:text-lg lg:text-xs max-w-[250px] leading-relaxed hidden xl:block"
      >
        <MaskText
          stagger={0.002}
          phrase="TO REFLECT ITS EXCEPTIONAL CRAFTSMANSHIP, EACH DECUBE ARRIVES IN BESPOKE PACKAGING WITH A CERTIFICATE OF AUTHENTICITY—A MARK OF ITS RARITY AND PRESTIGE."
        />
      </p>
    </div>
  );
}
