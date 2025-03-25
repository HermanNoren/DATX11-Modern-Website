"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { JSX, RefObject, useRef } from "react";
import CubeSizeButton from "./CubeSizeButton";
import { Flip } from "gsap/Flip";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

export default function CubeSizes(props: {
  onClickSm: () => void;
  onClickMd: () => void;
  onClickLg: () => void;
  onScrollOut: () => void;
  onScrollIn: () => void;
}) {
  const trigger = useRef<HTMLElement>(null);
  const borderTop = useRef<HTMLDivElement>(null);
  const borderRight = useRef<HTMLDivElement>(null);
  const borderBottom = useRef<HTMLDivElement>(null);
  const borderLeft = useRef<HTMLDivElement>(null);

  const borderAnimateDuration = 1;
  const borderAnimateEase = "power4.inOut";
  const borderToggleAction = "play none none reverse";

  const sizes = [
    {
      id: 0,
      title: "Petite",
      size: "10x10",
      description: `The Petit, a refined choice for those who value rarity in a compact form. A favorite among collectors looking to own a rare piece of the future. Whether displayed on a desk or stored as a long-term asset, it carries the unmistakable presence of something beyond Earth.`,
    },
    {
      id: 1,
      title: "Regal",
      size: "15x15",
      description: `The Regal, a perfect balance of rarity and prestige, the go-to choice for industry leaders and forward-thinkers. Coveted yet attainable, it's the cube that moves industries and closes deals. When a Regal is in your hands, you hold more than metal—you hold progress.`,
    },
    {
      id: 2,
      title: "Imperial",
      size: "20x20",
      description: `The Imperial, the largest and boldest, A monolith of Astrolite, commanding attention whether placed in a corporate headquarters, or private collection. Its sheer presence is a testament to those who operate on a grander scale. To own an Imperial is to stake a claim in the future itself.`,
    },
  ];

  const descSm = useRef<HTMLSpanElement>(null);
  const descMd = useRef<HTMLSpanElement>(null);
  const descLg = useRef<HTMLSpanElement>(null);
  const descRefs = [descSm, descMd, descLg];

  const buttonSm = useRef<HTMLDivElement>(null);
  const buttonMd = useRef<HTMLDivElement>(null);
  const buttonLg = useRef<HTMLDivElement>(null);
  const buttonRefs = [buttonSm, buttonMd, buttonLg];
  const buttonSmIndicator = useRef<HTMLDivElement>(null);
  const buttonMdIndicator = useRef<HTMLDivElement>(null);
  const buttonLgIndicator = useRef<HTMLDivElement>(null);
  const buttonIndicatorRefs = [
    buttonSmIndicator,
    buttonMdIndicator,
    buttonLgIndicator,
  ];
  const isAnimatingButtons = useRef<boolean>(false);

  const currentID = useRef<number>(1);
  const newID = useRef<number>(1);

  const propsOnClicks = [props.onClickSm, props.onClickMd, props.onClickLg];

  const descriptions: JSX.Element[] = [];
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    const element = (
      <SizeInfo
        ref={descRefs[i]}
        text={size.description}
        key={`sizeDesc${i}`}
      />
    );
    descriptions.push(element);
  }

  function animateBorderTop() {
    gsap.fromTo(
      borderTop.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: borderToggleAction,
        },
      }
    );
  }

  function animateBorderRight() {
    gsap.fromTo(
      borderRight.current,
      {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 0%, 100% 0%)",
      },
      {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: borderToggleAction,
        },
      }
    );
  }

  function animateBorderBottom() {
    gsap.fromTo(
      borderBottom.current,
      {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: borderToggleAction,
        },
      }
    );
  }

  function animateBorderLeft() {
    gsap.fromTo(
      borderLeft.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: borderAnimateDuration,
        ease: borderAnimateEase,
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: borderToggleAction,
        },
      }
    );
  }

  type yPositions = "100%" | "0" | "-100%";

  function animateText(
    ref: RefObject<HTMLSpanElement | null>,
    from: yPositions,
    to: yPositions,
    stagger?: number
  ) {
    if (!ref.current) return;
    const text = ref.current.querySelectorAll("#sizeDescText");

    gsap.fromTo(
      text,
      { y: from },
      {
        y: to,
        duration: 0.5,
        stagger: stagger ? stagger : 0.02,
        ease: "power2.out",
      }
    );
  }

  function animateTextScrollIn() {
    const ref = descRefs[currentID.current];
    if (!ref.current) return;

    const text = ref.current.querySelectorAll("#sizeDescText");

    gsap.fromTo(
      text,
      { y: "100%" },
      {
        y: "0",
        duration: 0.5,
        stagger: 0.002,
        ease: "power2.out",
      }
    );
  }

  function animateTextScrollOut() {
    const ref = descRefs[currentID.current];
    if (!ref.current) return;

    const text = ref.current.querySelectorAll("#sizeDescText");

    gsap.fromTo(
      text,
      { y: "0" },
      {
        y: "100%",
        duration: 0.5,
        stagger: -0.002,
        ease: "power2.out",
      }
    );
  }

  function animateButtonsScrollIn(ref: RefObject<HTMLDivElement | null>) {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { display: "none" },
      {
        display: "block",
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );

    const textOver = ref.current.querySelectorAll("#buttonTextOver");
    const textUnder = ref.current.querySelectorAll("#buttonTextUnder");

    gsap.fromTo(
      textOver,
      { y: "100%" },
      {
        y: "0",
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      textUnder,
      { y: "100%" },
      {
        y: "0",
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }

  useGSAP(
    () => {
      animateBorderTop();
      animateBorderRight();
      animateBorderBottom();
      animateBorderLeft();
      for (const ref of buttonRefs) {
        animateButtonsScrollIn(ref);
      }

      ScrollTrigger.create({
        trigger: trigger.current,
        start: "top top",
        onEnter: () => {
          isAnimatingButtons.current = true;
          setTimeout(() => {
            isAnimatingButtons.current = false;
          }, 500);
          props.onScrollIn();
          const indicatorRef = buttonIndicatorRefs[currentID.current];
          gsap.to(indicatorRef.current, {
            scale: 1,
            duration: 0.5,
          });
          animateTextScrollIn();
        },
        onLeaveBack: () => {
          isAnimatingButtons.current = true;
          setTimeout(() => {
            isAnimatingButtons.current = false;
          }, 800);
          props.onScrollOut();
          const indicatorRef = buttonIndicatorRefs[currentID.current];
          gsap.to(indicatorRef.current, { scale: 0, duration: 0.5 });
          animateTextScrollOut();
        },
      });
    },
    {
      scope: trigger,
    }
  );

  function onClick(i: number) {
    propsOnClicks[i]();
    newID.current = i;
    const descStagger = 0.002;
    if (newID.current !== currentID.current) {
      animateText(descRefs[newID.current], "-100%", "0", descStagger);
      animateText(descRefs[currentID.current], "0", "100%", descStagger);
    }

    currentID.current = i;
  }

  function onMouseEnter(i: number) {
    for (let j = 0; j < buttonIndicatorRefs.length; j++) {
      const indicatorRef = buttonIndicatorRefs[j];
      if (i === j) {
        gsap.to(indicatorRef.current, { scale: 1, duration: 0.3 });
      } else {
        gsap.to(indicatorRef.current, { scale: 0, duration: 0.3 });
      }
    }
  }

  function onMouseLeave() {
    for (let j = 0; j < buttonIndicatorRefs.length; j++) {
      const indicatorRef = buttonIndicatorRefs[j];
      if (j === currentID.current) {
        gsap.to(indicatorRef.current, { scale: 1, duration: 0.3 });
      } else {
        gsap.to(indicatorRef.current, { scale: 0, duration: 0.3 });
      }
    }
  }

  return (
    <section ref={trigger} className="relative h-[300lvh] z-20">
      <div className="sticky inset-0 container w-full h-lvh grid grid-cols-[1fr_30em_1fr] gap-4">
        <div className="relative flex flex-col justify-center">
          <div className="h-[30em] flex flex-col gap-1">
            {sizes.map((size, i) => {
              const isActive = i === currentID.current;
              return (
                <div key={i} className="w-full relative">
                  <div
                    onMouseEnter={() => onMouseEnter(i)}
                    onMouseLeave={onMouseLeave}
                    className="w-fit"
                  >
                    <CubeSizeButton
                      onClick={() => onClick(size.id)}
                      text={size.title}
                      className="text-6xl uppercase"
                      ref={buttonRefs[i]}
                      isAnimatingOut={isAnimatingButtons}
                    ></CubeSizeButton>
                  </div>

                  <div
                    ref={buttonIndicatorRefs[i]}
                    className={cn(
                      "absolute top-[50%] translate-y-[-50%] left-28 text-5xl will-change-transform scale-0"
                    )}
                  >
                    •
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid place-items-center">
          <div className="relative w-full aspect-square">
            <div
              ref={borderTop}
              className="absolute top-0 left-0 w-full h-[1px] bg-foreground"
            ></div>
            <div
              ref={borderRight}
              className="absolute top-0 right-0 w-[1px] h-full bg-foreground"
            ></div>
            <div
              ref={borderBottom}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground"
            ></div>
            <div
              ref={borderLeft}
              className="absolute top-0 left-0 w-[1px] h-full bg-foreground"
            ></div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center uppercase">
          <div className="h-[30em]">{descriptions}</div>
        </div>
      </div>
    </section>
  );
}

function SizeInfo(props: {
  text: string;
  ref: RefObject<HTMLSpanElement | null>;
}) {
  const words = props.text.split(" ");
  return (
    <div className="absolute w-[15em] text-xs">
      <span ref={props.ref} className="flex flex-wrap h-4 leading-[1.25em]">
        {words.map((word, i) => {
          const chars = word.split("");

          return (
            <span key={i} className="relative flex mr-1 overflow-hidden">
              {chars.map((char, i) => {
                return (
                  <span
                    id="sizeDescText"
                    className="relative translate-y-[100%]"
                    key={i}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </div>
  );
}
