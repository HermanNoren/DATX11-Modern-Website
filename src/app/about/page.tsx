// page.tsx
"use client";

import React from "react";
import AboutTitle from "./_components/aboutTitle";
import VideoSection from "./_components/videoSection";
import ScrollRevealText from "./_components/scrollRevealText";
import ParallaxImageSection from "./_components/parallaxImageSection";
/*import "./about.css";*/
import AdressSection from "./_components/AdressSection";

export default function AboutPage() {
  return (
    <section className="about-container">
      <AboutTitle />
      <VideoSection />
      <ScrollRevealText />
      <ParallaxImageSection/>
      <AdressSection/>
    </section>
  );
}