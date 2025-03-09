// _components/VideoSection.tsx
import React from "react";

export default function VideoSection() {
  return (
    <div className="video-section">
      <p className="side-text left-text">
        OUR TEAM IS OBSESSED WITH MINIMALISM, SYMMETRY, AND MATERIAL INNOVATION—PUSHING THE BOUNDARIES OF DESIGN TO DELIVER PIECES THAT EMBODY SOPHISTICATION AND EXCLUSIVITY.
      </p>
      <div className="video-container">
        <video className="video-player" autoPlay loop muted playsInline>
          <source src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="side-text right-text">
        TO REFLECT ITS EXCEPTIONAL CRAFTSMANSHIP, EACH DECUBE ARRIVES IN BESPOKE PACKAGING WITH A CERTIFICATE OF AUTHENTICITY—A MARK OF ITS RARITY AND PRESTIGE.
      </p>
    </div>
  );
}