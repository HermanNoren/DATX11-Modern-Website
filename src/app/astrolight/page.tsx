// page.tsx
"use client";

import React from "react";
import AstrolightHero from "./_components/AstrolightHero";
import ExpAstrolight from "./_components/ExpAstrolight";
import AstrolightInfo from "./_components/AstrolightInfo";
import ImageSection from "./_components/ImageSection";


export default function AstrolightPage() {
  return (
    <section className="astrolight-container">
        <AstrolightHero/>
        <ExpAstrolight/>
        <AstrolightInfo/>
        <ImageSection/>
    </section>
  );
}