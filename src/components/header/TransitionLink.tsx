"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";

export default function TransitionLink(props: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate([{}, {}], {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    });

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <Link
      href={props.href}
      onClick={(e) => {
        e.preventDefault();
        router.push(props.href, {
          onTransitionReady: slideInOut,
        });
      }}
      className={props.className}
    >
      {props.children}
    </Link>
  );
}
