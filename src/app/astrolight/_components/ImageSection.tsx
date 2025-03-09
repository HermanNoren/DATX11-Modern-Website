"use client";

import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="relative w-full flex justify-center pt-[calc(var(--section-padding)*1.8)] pb-[calc(var(--section-padding)*2.5)] overflow-visible">
      {/* Full-width Taller Colored Background Box */}
      <div className="absolute left-0 right-0 w-full bg-[#95614E] rounded-[24px] py-[calc(var(--section-padding)*2)] px-[var(--container-padding)] flex justify-center overflow-visible z-10">
        {/* Overlapping Images */}
        <div className="absolute w-full h-full">
          {/* Image 1 - Large Top Left */}
          <Image
            src="/chair&CubeAstrolight.png"
            alt="Interior 1"
            width={350}
            height={600}
            className="absolute top-[-450px] left-[25%] rounded-lg shadow-lg z-20"
          />

          {/* Image 2 - Small Bottom Left */}
          <Image
            src="/CubeTableAstrolight.png"
            alt="Interior 2"
            width={200}
            height={300}
            className="absolute bottom-[120px] left-[10%] rounded-lg shadow-lg z-20"
          />

          {/* Image 3 - Large Bottom Right */}
          <Image
            src="/cubeAndWindowAstrolight.png"
            alt="Interior 3"
            width={300}
            height={400}
            className="absolute bottom-[80px] right-[30%] rounded-lg shadow-lg z-20"
          />

          {/* Image 4 - Small Top Right */}
          <Image
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
