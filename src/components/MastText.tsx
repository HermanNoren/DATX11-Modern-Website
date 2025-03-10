"use client";

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function MaskText(
  props: Readonly<{
    phrase: string;
    className?: string;
    fontSize?: string;
    highlightWords?: string;
    highlightColor?: string;
    delay?: number;
    stagger?: number;
    upsideDown?: boolean;
  }>
) {
  const trigger = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!trigger.current) return;

    gsap.fromTo(
      trigger.current.querySelectorAll("#maskTextSpan"),
      { y: "110%" },
      {
        y: 0,
        duration: 1,
        stagger: props.stagger ? props.stagger : 0.01,
        ease: "power4.out",
        delay: props.delay ? props.delay : 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const words = props.phrase.split(" ");
  const hWords = props.highlightWords?.split(" ");

  return (
    <span ref={trigger} className="relative">
      {words.map((word, i) => {
        const chars = word.split("");

        return (
          <span
            key={i}
            className={cn(
              "relative inline-flex overflow-hidden",
              props.className
            )}
          >
            <span
              className={cn(
                "mr-1 relative inline-flex",
                props.fontSize,
                hWords?.includes(word) ? props.highlightColor : ""
              )}
            >
              {chars.map((char, i) => {
                return (
                  <span
                    id="maskTextSpan"
                    className={cn(
                      "relative",
                      props.upsideDown ? "rotate-z-180 rotate-y-180" : ""
                    )}
                    key={i}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </span>
        );
      })}
    </span>
  );
}
