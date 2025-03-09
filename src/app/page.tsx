"use client";

import Hero from "./_components/Hero";
import { useState, useEffect } from "react";
import LoadingScreen from "./_components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <LoadingScreen onFinish={() => setIsLoading(false)} /> 
      <Hero />
      <div className="w-screen h-[200lvh] bg-black"></div>
    </>
  );
}
