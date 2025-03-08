"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./about.css";

// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll(".word-animation");

      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  // Function to wrap each word in a span for animation
  const formatText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word-animation">
        {word}&nbsp;
      </span>
    ));
  };

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

        {/* 🎥 Video */}
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

      {/* Scroll-Revealing Text (GSAP Staggering Effect) */}
      <div className="scroll-reveal-text" ref={textRef}>
        <p className="reveal-paragraph">
          {formatText(
            "deCube is a design-driven company redefining interior aesthetics through sleek, geometric precision. Founded by a collective of cube enthusiasts, we merge artistry and engineering to create objects of pure form and function."
          )}
        </p>
      </div>

      {/* Three Rectangular Boxes Scene */}
      <section className="box-section">
        <div className="box-wrapper">
          {/* Left Rotated Text */}
          <div className="side-text-box left-rotated">CUBE/KUB/CUBO/KUUTIO/立方体</div>

          <div className="box-container">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
          </div>

          {/* Right Rotated Text */}
          <div className="side-text-box right-rotated">CUBE/KUB/CUBO/KUUTIO/立方体</div>
        </div>
      </section>
    </section>

    
  );
}
