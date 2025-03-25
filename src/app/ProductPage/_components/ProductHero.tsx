import ClipPathReveal from "@/components/ClipPathReveal";
import MaskText from "@/components/MaskText";
import React from "react";
import ProductGif from "@/imgs/gifs/product-gif.gif";
import ParallaxImage from "@/components/ParallaxImage";

const Header: React.FC = () => {
  return (
    <div className="relative mx-auto my-8 overflow-hidden w-full max-w-[1600px] min-h-[600px] px-4">
      {/* "The" text */}
      <h3
        className="
        absolute 
        top-0 
        left-[20%]
        text-[clamp(80px,10vw,160px)]
        leading-[0.9]
        font-thin
        m-0
        p-0
        whitespace-nowrap
        "
      >
        <MaskText phrase="The" delay={0.7} />
      </h3>
      {/* Paragraph */}
      <p
        className="
        absolute
        top-[60px]
        left-[41%]
        w-[clamp(280px,35vw,560px)]
        font-light
        leading-relaxed
        m-0
        p-0
        text-[14px]
        uppercase"
      >
        <MaskText
          stagger={0.002}
          delay={0.7}
          phrase="Experience deCube—a revolutionary decorating cube crafted from
        Astrolite, an exclusive material from the depths of space. With its
        sleek, modern aesthetic and cutting-edge composition, deCube stands as a
        testament to innovation and sophistication."
        />
      </p>
      {/* Product image */}
      <div
        className="
        absolute
        top-[150px]
        left-[23%]
        w-[clamp(180px,15vw,235px)]"
      >
        <ClipPathReveal delay={0.5}>
          <ParallaxImage src={ProductGif} alt="Product Demo" factor={0.04} />
        </ClipPathReveal>
      </div>
      {/* "Product" text */}
      <h3
        className="
        absolute
        top-[150px]
        left-[40%]
        text-[clamp(80px,10vw,160px)]
        leading-[0.9]
        font-thin
        m-0
        p-0
        whitespace-nowrap
        "
      >
        <MaskText phrase="Product" delay={0.7} />
      </h3>
    </div>
  );
};

export default Header;
