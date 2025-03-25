"use client";

import { animateLettersIn } from "@/components/page_transition/animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animateLettersIn();
  }, []);
  return <>{children}</>;
}
