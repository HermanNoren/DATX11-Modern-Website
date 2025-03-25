"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { cn } from "@/utils/cn";
import SplashCursor from "@/components/SplashCursor";

export default function Providers(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main
      className={cn(
        "relative",
        isLoading ? "w-screen h-screen overflow-hidden" : ""
      )}
    >
      <LoadingScreen onFinish={() => setIsLoading(false)} />
      <SplashCursor />
      {props.children}
    </main>
  );
}
