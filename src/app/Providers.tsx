"use client";

import { useState } from "react";
import LoadingScreen from "./_components/LoadingScreen";
import Mouse from "@/components/Mouse";
import { cn } from "@/utils/cn";

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
      <Mouse />
      {props.children}
    </main>
  );
}
