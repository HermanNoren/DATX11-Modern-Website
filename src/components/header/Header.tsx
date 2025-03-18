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
import VelocityScroll from "../VelocityScroll";

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
      href: "/ProductPage",
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

const menuAnim = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const menuLinkSlide = {
  initial: {
    x: "80px",
    opacity: 0.5,
  },
  enter: (i: number) => ({
    x: "0px",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: "80px",
    opacity: 0.5,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

function FullScreenMenu(props: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  links: link[];
}) {
  const menu = useRef<HTMLDivElement>(null);
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  const pathname = usePathname();

  const activeIndex = props.links.findIndex((link) => link.href === pathname);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const linkRefs = useRef(props.links.map(() => createRef<HTMLDivElement>()));

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
      variants={menuAnim}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute top-0 right-0 w-[30em] h-lvh z-[99] bg-dark-background"
    >
      <div className="w-full h-full flex flex-col justify-evenly">
        <div className="container">
          <p className="uppercase pb-4">Menu</p>
          <div className="w-full h-[1px] bg-foreground opacity-50"></div>
        </div>
        <nav className="relative grid place-items-center">
          <ul className="flex flex-col gap-1 uppercase">
            {props.links.map((link, i) => {
              const isActive = link.href === pathname;
              return (
                <motion.div
                  key={i}
                  variants={menuLinkSlide}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  onMouseEnter={() => onMouseEnter(i)}
                  onMouseLeave={onMouseLeave}
                  className="relative w-fit flex gap-6"
                >
                  <div className="relative">
                    <div
                      className={cn(
                        "relative text-4xl will-change-transform pt-[0.14em]",
                        isActive ? "scale-100" : "scale-0"
                      )}
                      ref={linkRefs.current[i]}
                    >
                      •
                    </div>
                  </div>

                  <TransitionLink href={link.href}>
                    <Button
                      key={i}
                      text={link.name}
                      onClick={onClick}
                      className="text-5xl uppercase"
                    />
                  </TransitionLink>
                </motion.div>
              );
            })}
          </ul>
        </nav>
        <VelocityScroll className={"text-4xl"}>
          {cubeLangs}/{cubeLangs}/
        </VelocityScroll>
      </div>
    </motion.div>
  );
}
