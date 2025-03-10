"use client";

import { cn } from "@/utils/cn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function MaskTextOLD(
  props: Readonly<{
    phrase: string;
    className?: string;
    fontSize?: string;
    highlightWords?: string;
    highlightColor?: string;
    delay?: number;
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
        stagger: 0.04,
        ease: "power4.out",
        delay: props.delay ? props.delay : 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  const words = props.phrase.split(" ");
  const hWords = props.highlightWords?.split(" ");

  return (
    <span ref={trigger} className="relative">
      {words.map((word, i) => {
        return (
          <span
            key={i}
            className={cn(
              "relative inline-flex overflow-hidden",
              props.className
            )}
          >
            <span
              id="maskTextSpan"
              className={cn(
                "mr-1 relative",
                props.fontSize,
                hWords?.includes(word) ? props.highlightColor : ""
              )}
            >
              {word + " "}
            </span>
          </span>
        );
      })}
    </span>
  );
}
