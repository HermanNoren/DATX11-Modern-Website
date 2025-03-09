"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ImageSection() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Store the section element in a variable to prevent cleanup issues
    const sectionElement = sectionRef.current;

    // Function to handle cursor movement and update image positions
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionElement) return;

      // Calculate cursor position relative to the section
      const { clientX, clientY } = e;
      const { width, height, left, top } = sectionElement.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / width;
      const y = (clientY - (top + height / 2)) / height;

      // Apply GSAP animations to move images based on cursor position
      requestAnimationFrame(() => {
        imageRefs.current.forEach((img, index) => {
          if (img) {
            gsap.to(img, {
              x: x * (index % 2 === 0 ? 25 : -25), // Alternate movement directions
              y: y * (index % 2 === 0 ? 25 : -25),
              duration: 0.5, // Smooth transition for responsive effect
              ease: "power2.out",
            });
          }
        });
      });
    };

    // Attach the event listener to track mouse movement inside the section
    sectionElement?.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      sectionElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center pt-[calc(var(--section-padding)*1.8)] pb-[calc(var(--section-padding)*2.5)] overflow-visible"
    >
      {/* Full-width Colored Background Box */}
      <div className="absolute left-0 right-0 w-full bg-[#95614E] rounded-[24px] py-[calc(var(--section-padding)*2)] px-[var(--container-padding)] flex justify-center overflow-visible z-10">
        {/* Container for Overlapping Images */}
        <div className="absolute w-full h-full">
          {/* Image 1 - Large Top Left */}
          <Image
            ref={(el) => {
              if (el) imageRefs.current[0] = el;
            }}
            src="/chair&CubeAstrolight.png"
            alt="Interior 1"
            width={350}
            height={600}
            className="absolute top-[-450px] left-[25%] rounded-lg shadow-lg z-20"
          />

          {/* Image 2 - Small Bottom Left */}
          <Image
            ref={(el) => {
              if (el) imageRefs.current[1] = el;
            }}
            src="/CubeTableAstrolight.png"
            alt="Interior 2"
            width={200}
            height={300}
            className="absolute bottom-[120px] left-[10%] rounded-lg shadow-lg z-20"
          />

          {/* Image 3 - Large Bottom Right */}
          <Image
            ref={(el) => {
              if (el) imageRefs.current[2] = el;
            }}
            src="/cubeAndWindowAstrolight.png"
            alt="Interior 3"
            width={300}
            height={400}
            className="absolute bottom-[80px] right-[30%] rounded-lg shadow-lg z-20"
          />

          {/* Image 4 - Small Top Right */}
          <Image
            ref={(el) => {
              if (el) imageRefs.current[3] = el;
            }}
            src="/cameraAstrolight.png"
            alt="Interior 4"
            width={180}
            height={140}
            className="absolute top-[-180px] right-[10%] rounded-lg shadow-lg z-20"
          />
        </div>
      </div>
    </section>
  );
}
