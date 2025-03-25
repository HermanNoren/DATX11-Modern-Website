import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative mx-auto my-8 overflow-hidden w-full max-w-[1600px] min-h-[600px] px-4">
      {/* "The" text */}
      <h3 className="
        absolute 
        top-0 
        left-[20%]
        text-[clamp(80px,10vw,160px)]
        leading-[0.9]
        font-thin
        m-0
        p-0
        whitespace-nowrap"
      >
        The
      </h3>
      {/* Paragraph */}
      <p className="
        absolute
        top-[60px]
        left-[41%]
        w-[clamp(280px,35vw,560px)]
        font-light
        leading-relaxed
        m-0
        p-0
        text-[14px]"
      >
        Experience deCube—a revolutionary decorating cube crafted from
        Astrolite, an exclusive material from the depths of space. With its
        sleek, modern aesthetic and cutting-edge composition, deCube stands as a
        testament to innovation and sophistication.
      </p>
      {/* Product image */}
      <div className="
        absolute
        top-[150px]
        left-[23%]
        w-[clamp(180px,15vw,235px)]"
      >
        <img
          src="/product-gif.gif"
          alt="Product Demo"
          className="w-full h-auto"
        />
      </div>
      {/* "Product" text */}
      <h3 className="
        absolute
        top-[150px]
        left-[40%]
        text-[clamp(80px,10vw,160px)]
        leading-[0.9]
        font-thin
        m-0
        p-0
        whitespace-nowrap"
      >
        Product
      </h3>
    </div>
  );
};

export default Header;
