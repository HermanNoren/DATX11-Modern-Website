"use client";

import "./burgerMenu.css";
import { useRef } from "react";

export default function BurgerMenu(props: {
  onClick?: () => void;
  isActive?: boolean;
}) {
  const button = useRef<HTMLButtonElement>(null);
  const burger = useRef<HTMLDivElement>(null);

  return (
    <button
      ref={button}
      onClick={props.onClick}
      className="relative flex justify-center items-center size-6 z-[100]"
    >
      <div
        ref={burger}
        className={`burger ${props.isActive ? "burgerActive" : ""}`}
      ></div>
    </button>
  );
}
