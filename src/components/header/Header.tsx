"use client";

import Button from "../Button";
import { Boxes } from "lucide-react";
import BurgerMenu from "./BurgerMenu";
import {
  createRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { cn } from "@/utils/cn";
import TransitionLink from "./TransitionLink";

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
      <nav className="w-full container is-full pt-[var(--container-padding)] flex justify-between text-xl">
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
        {isActive ? (
          <FullScreenMenu
            isActive={isActive}
            links={links}
            setIsActive={setIsActive}
          />
        ) : null}
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

const menuMoveContent = {
  initial: {
    x: "10em",
  },
  enter: {
    x: "0",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "10em",
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

function FullScreenMenu(props: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  links: link[];
}) {
  const menu = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  const pathname = usePathname();

  const activeIndex = props.links.findIndex((link) => link.href === pathname);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const linkRefs = useRef(props.links.map(() => createRef<HTMLDivElement>()));

  useEffect(() => {
    if (!props.isActive) setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  }, [props.isActive]);

  function onClick() {
    props.setIsActive(false);
    gsap.to(menu.current, {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      duration: 0.3,
    });
  }

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
    setHoveredIndex(null);
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
      ref={menu}
      variants={menuClipPath}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute inset-0 w-screen h-lvh z-[99] bg-neutral-200"
    >
      {isAnimating ? <div className="absolute inset-0 z-[100]"></div> : null}
      <motion.div
        variants={menuMoveContent}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-full"
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
                  <TransitionLink href={link.href}>
                    <Button
                      key={i}
                      text={link.name}
                      onClick={onClick}
                      className="text-7xl uppercase"
                    />
                  </TransitionLink>
                </div>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
}
