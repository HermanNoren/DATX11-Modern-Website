// page.tsx
"use client";

import React from "react";
import AboutTitle from "./_components/aboutTitle";
import VideoSection from "./_components/videoSection";
import ScrollRevealText from "./_components/scrollRevealText";
import ParallaxImageSection from "./_components/parallaxImageSection";
import AdressSection from "./_components/AdressSection";
import Footer from "@/components/footer/Footer";

export default function AboutPage() {
  return (
    <section className="relative">
      <AboutTitle />
      <VideoSection />
      <ScrollRevealText />
      <ParallaxImageSection />
      <AdressSection />
      <Footer />
    </section>
  );
}
