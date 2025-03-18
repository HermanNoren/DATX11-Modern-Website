// page.tsx
"use client";

import React from "react";
import AstrolightHero from "./_components/AstrolightHero";
import ExpAstrolight from "./_components/ExpAstrolight";
import AstrolightInfo from "./_components/AstrolightInfo";
import ImageSection from "./_components/ImageSection";
import Footer from "@/components/footer/Footer";

export default function AstrolightPage() {
  return (
    <section className="astrolight-container">
      <div className="relative z-10">
        <AstrolightHero />
        <ExpAstrolight />
        <AstrolightInfo />
        <ImageSection />
        <div className="w-full h-[30em] bg-background" />
      </div>
      <Footer />
    </section>
  );
}
