"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ScrollToTop() {
  const isScrollingUp = useRef(false);
  const scrollUp = useRef<HTMLAnchorElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const borderTop = useRef<HTMLDivElement>(null);
  const borderRight = useRef<HTMLDivElement>(null);
  const borderBottom = useRef<HTMLDivElement>(null);
  const borderLeft = useRef<HTMLDivElement>(null);

  const borderAnimateDuration = 1;
  const borderAnimateEase = "power4.inOut";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      id: "burgerMenyScrollTrigger",
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight / 2,
      onLeave: () => {
        animateIn();
      },
      onEnterBack: () => {
        if (isScrollingUp.current) return;
        animateOut();
      },
    });
  });

  function onClick() {
    if (!scrollUp.current || !lenis || isScrollingUp.current) return;
    isScrollingUp.current = true;
    lenis.scrollTo(0, {
      immediate: false,
      duration: 1.5,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
    setTimeout(() => {
      isScrollingUp.current = false;
    }, 1500);
    animateOut();
  }

  function animateBorderTop(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        borderTop.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: borderAnimateDuration,
          ease: borderAnimateEase,
        }
      );
    } else {
      gsap.to(borderTop.current, {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
      });
    }
  }

  function animateBorderRight(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        borderRight.current,
        {
          clipPath: "polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)",
        },
        {
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          duration: borderAnimateDuration,
          ease: borderAnimateEase,
        }
      );
    } else {
      gsap.to(borderRight.current, {
        clipPath: "polygon(100% 100%, 0% 100%, 0% 100%, 100% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
      });
    }
  }

  function animateBorderBottom(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        borderBottom.current,
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: borderAnimateDuration,
          ease: borderAnimateEase,
        }
      );
    } else {
      gsap.to(borderBottom.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
      });
    }
  }

  function animateBorderLeft(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        borderLeft.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: borderAnimateDuration,
          ease: borderAnimateEase,
        }
      );
    } else {
      gsap.to(borderLeft.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
      });
    }
  }

  function animateButton(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        button.current,
        {
          y: "105%",
        },
        {
          y: "0%",
          duration: 1,
          delay: 0.5,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(button.current, {
        y: "105%",
        duration: 1,
        ease: "power4.in",
      });
    }
  }

  function animateBg(direction: "in" | "out") {
    if (direction === "in") {
      gsap.fromTo(
        bg.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(bg.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.in",
      });
    }
  }

  function animateIn() {
    animateBorderTop("in");
    animateBorderLeft("in");
    animateBorderBottom("in");
    animateBorderRight("in");
    animateButton("in");
    animateBg("in");
  }

  function animateOut() {
    animateBorderTop("out");
    animateBorderLeft("out");
    animateBorderBottom("out");
    animateBorderRight("out");
    animateButton("out");
    animateBg("out");
  }

  return (
    <a
      ref={scrollUp}
      className="fixed bottom-[var(--container-padding)] right-[var(--container-padding)] z-50"
    >
      <div className="absolute w-full aspect-square">
        <div
          ref={borderTop}
          className="absolute top-0 left-0 w-full h-[1px] bg-foreground [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)]"
        ></div>
        <div
          ref={borderRight}
          className="absolute top-0 right-0 w-[1px] h-full bg-foreground [clip-path:polygon(100%_0%,_0%_0%,_0%_0%,_100%_0%)]"
        ></div>
        <div
          ref={borderBottom}
          className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground [clip-path:polygon(100%_0%,_100%_0%,_100%_100%,_100%_100%)]"
        ></div>
        <div
          ref={borderLeft}
          className="absolute top-0 left-0 w-[1px] h-full bg-foreground [clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
        ></div>
      </div>
      <div className="flex overflow-hidden">
        <button
          onClick={onClick}
          ref={button}
          className="cursor-pointer translate-y-[105%]"
        >
          <ArrowUp strokeWidth={1} className="size-7" />
        </button>
      </div>
    </a>
  );
}
