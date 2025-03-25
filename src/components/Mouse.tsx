"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Mouse() {
  const mouse = {
    x: useMotionValue("0"),
    y: useMotionValue("0"),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.x.set(`${clientX}`);
    mouse.y.set(`${clientY}`);
  };

  useEffect(() => {
    mouse.x.set(`${window.innerWidth / 2}`);
    mouse.y.set(`${window.innerHeight / 2}`);

    window.addEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <div className="sticky inset-0 z-[101] pointer-events-none select-none">
      <motion.div
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
        className="absolute size-4 border border-foreground opacity-50 translate-x-[-50%] translate-y-[-50%] pointer-events-none"
      ></motion.div>
    </div>
  );
}
