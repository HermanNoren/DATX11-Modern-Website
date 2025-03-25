"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Video() {
  const stickyVideoContainer = useRef<HTMLDivElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const windowHeight = window.innerHeight;

    gsap.fromTo(
      videoContainer.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger: stickyVideoContainer.current,
          start: "top top",
          end: `+=${windowHeight}`,
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      video.current,
      {
        marginLeft: "0",
        marginRight: "0",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
      },
      {
        marginLeft: "2em",
        marginRight: "2em",
        borderBottomLeftRadius: "2em",
        borderBottomRightRadius: "2em",
        scrollTrigger: {
          trigger: stickyVideoContainer.current,
          start: "bottom bottom",
          end: `+=${windowHeight}`,
          scrub: true,
        },
      }
    );
  });

  return (
    <div
      ref={stickyVideoContainer}
      className="absolute bottom-0 left-0 w-screen h-[200lvh] z-30 pointer-events-none select-none"
    >
      <div
        ref={videoContainer}
        className="sticky inset-0 w-screen h-lvh pointer-events-auto select-auto"
      >
        <div ref={video} className="relative h-full overflow-hidden">
          <video
            className="relative w-full h-full object-cover"
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
        </div>
      </div>
    </div>
  );
}
