"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Copyright } from "lucide-react";
import Button from "@/components/Button";
import TransitionLink from "@/components/header/TransitionLink";

export default function CTA() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-65%", "0%"]);

  const text = "deCube";
  const letters = text.split("");

  const letterTransforms = letters.map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [`${0 + index * 8}%`, "0%"])
  );

  const links = [
    {
      name: "Instagram",
    },
    {
      name: "Facebook",
    },
    {
      name: "LinkedIn",
    },
    {
      name: "Spotify",
    },
  ];

  return (
    <motion.section
      ref={container}
      style={{ y }}
      className="relative h-[75vh] flex flex-col justify-between items-center container"
    >
      <div className="w-full h-full grid place-items-center">
        <TransitionLink
          className="flex relative w-fit cursor-pointer"
          href="/products"
        >
          {letters.map((letter, i) => {
            return (
              <motion.span
                key={i}
                style={{ y: letterTransforms[i] }}
                className="text-[23.5em] leading-[1em] font-normal overflow-hidden"
              >
                {letter}
              </motion.span>
            );
          })}
        </TransitionLink>
      </div>
      <div className="relative container w-full py-8">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground opacity-50"></div>
        <div className="flex justify-between items-center">
          <p className="flex gap-2 items-center">
            <Copyright strokeWidth={1} />
            <span>deCube</span>
          </p>
          <ul className="flex gap-2 items-center">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <Button text={link.name} className="uppercase" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
