"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const scrollUp = useRef<HTMLAnchorElement>(null);

  var isScrollingUp = false;

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  function onScroll() {
    if (!scrollUp.current) return;
    if (isScrollingUp) return;

    if (window.scrollY >= 560) scrollUp.current.classList.add("show-scroll");
    else scrollUp.current.classList.remove("show-scroll");
  }

  function onClick() {
    if (!scrollUp.current) return;
    isScrollingUp = true;
    scrollUp.current.classList.remove("show-scroll");
    setTimeout(function () {
      isScrollingUp = false;
    }, 1000);
  }

  return (
    <a
      onClick={onClick}
      ref={scrollUp}
      className=" border fixed bottom-[var(--container-padding)] right-[var(--container-padding)] z-30 bg-blue-500"
    >
      <ArrowUp strokeWidth={1} className="size-8" />
    </a>
  );
}
