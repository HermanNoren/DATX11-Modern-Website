"use client"; 

import React from "react";
import { motion } from "framer-motion"; 
import "./about.css"; 

// Function to create staggered word animations
const revealText = (text: string): React.ReactNode[] => {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: false }}  
      transition={{ duration: 0.4, delay: index * 0.08 }}  
      className="word-animation" 
    >
      {word}&nbsp;
    </motion.span>
  ));
};

export default function AboutPage() {
  return (
    <section className="about-container">
      {/* Large Title */}
      <h1 className="about-title">
        About <span className="bold">deCube.</span>
      </h1>

      {/* Video & Side Text Section */}
      <div className="video-section">
        {/* Left Text */}
        <p className="side-text left-text">
          OUR TEAM IS OBSESSED WITH MINIMALISM, SYMMETRY, AND MATERIAL 
          INNOVATION—PUSHING THE BOUNDARIES OF DESIGN TO DELIVER PIECES THAT 
          EMBODY SOPHISTICATION AND EXCLUSIVITY.
        </p>

        {/* 🎥 Replace Gray Box with Video */}
        <div className="video-container">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Text */}
        <p className="side-text right-text">
          TO REFLECT ITS EXCEPTIONAL CRAFTSMANSHIP, EACH DECUBE ARRIVES IN 
          BESPOKE PACKAGING WITH A CERTIFICATE OF AUTHENTICITY—A MARK OF 
          ITS RARITY AND PRESTIGE.
        </p>
      </div>

      {/* Scroll-Revealing Text (Word-by-Word Fade-In) */}
      <motion.div
        className="scroll-reveal-text"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false }} 
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <p className="reveal-paragraph">
          {revealText(
            "deCube is a design-driven company redefining interior aesthetics through sleek, geometric precision. Founded by a collective of cube enthusiasts, we merge artistry and engineering to create objects of pure form and function."
          )}
        </p>
      </motion.div>
    </section>
  );
}
