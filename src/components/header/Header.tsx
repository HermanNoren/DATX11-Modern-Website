"use client";

import Button from "../Button";
import { Boxes } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import { createRef, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { cn } from "@/utils/cn";

type link = {
  name: string;
  href: string;
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Astrolight",
      href: "/astrolight",
    },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-[99]">
      <nav className="w-full container is-full py-[var(--container-padding)] flex justify-between text-xl">
        <Button
          href="/"
          text="deCube"
          icon={<Boxes strokeWidth={1} className="size-6" />}
        />
        <BurgerMenu
          onClick={() => setIsActive(!isActive)}
          isActive={isActive}
        />
      </nav>
      <AnimatePresence mode="wait">
        {isActive ? <FullScreenMenu isActive={isActive} links={links} /> : null}
      </AnimatePresence>
    </header>
  );
}

const menuClipPath = {
  initial: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
  },
  enter: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

function FullScreenMenu(props: { isActive: boolean; links: link[] }) {
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  const pathname = usePathname();

  // Find the index of the active link
  const activeIndex = props.links.findIndex((link) => link.href === pathname);

  // State to track hovered index
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const linkRefs = useRef(props.links.map(() => createRef<HTMLDivElement>()));

  function onMouseEnter(i: number) {
    setHoveredIndex(i);
    for (let j = 0; j < linkRefs.current.length; j++) {
      const linkRef = linkRefs.current[j];
      if (i === j) {
        gsap.to(linkRef.current, { scale: 1, duration: 0.3 });
      } else {
        gsap.to(linkRef.current, { scale: 0, duration: 0.3 });
      }
    }
  }

  function onMouseLeave() {
    setHoveredIndex(null); // Reset hover state
    // Restore active link indicator
    for (let j = 0; j < linkRefs.current.length; j++) {
      const linkRef = linkRefs.current[j];
      if (j === activeIndex) {
        gsap.to(linkRef.current, { scale: 1, duration: 0.3 });
      } else {
        gsap.to(linkRef.current, { scale: 0, duration: 0.3 });
      }
    }
  }

  return (
    <motion.div
      variants={menuClipPath}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute inset-0 w-screen h-lvh z-[99] bg-neutral-200"
    >
      <span className="absolute text-4xl rotate-z-270 origin-top-left bottom-[-1em]">
        {cubeLangs}/{cubeLangs}
      </span>
      <nav className="relative w-full h-full grid place-items-center">
        <ul className="flex flex-col gap-1 uppercase">
          {props.links.map((link, i) => {
            const isActive = link.href === pathname;
            return (
              <div
                key={i}
                onMouseEnter={() => onMouseEnter(i)}
                onMouseLeave={onMouseLeave}
                className="relative w-fit"
              >
                <div
                  ref={linkRefs.current[i]}
                  className={cn(
                    "absolute left-[-0.75em] top-[0.32em] text-5xl will-change-transform",
                    isActive ? "scale-100" : "scale-0"
                  )}
                >
                  •
                </div>
                <Button
                  key={i}
                  href={link.href}
                  text={link.name}
                  className="text-7xl"
                />
              </div>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
}
