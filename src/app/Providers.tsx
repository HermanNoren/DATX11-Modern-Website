"use client";

import { useState } from "react";
import LoadingScreen from "./_components/LoadingScreen";

export default function Providers(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className={isLoading ? "w-screen h-screen overflow-hidden" : ""}>
      <LoadingScreen onFinish={() => setIsLoading(false)} />
      {props.children}
    </main>
  );
}
