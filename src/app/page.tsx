"use client";

import CubeInfo from "./_components/ScrollCubeSection/CubeInfo";
import Hero from "./_components/ScrollCubeSection/Hero";
import ScrollCubeSection from "./_components/ScrollCubeSection/ScrollCubeSection";
import SideScrollVideo from "./_components/ScrollCubeSection/SideScrollVideo";
import Slogan from "./_components/ScrollCubeSection/Slogan";
import Footer from "./_components//footer/footer";
import { useState, useEffect } from "react";
import LoadingScreen from "./_components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <LoadingScreen onFinish={() => setIsLoading(false)} /> 
      <ScrollCubeSection>
        <Hero />
        <Slogan />
        <CubeInfo />
        <SideScrollVideo />
      </ScrollCubeSection>
      <Footer />
    </>
    
  );
}
