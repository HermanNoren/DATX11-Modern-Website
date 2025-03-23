import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="
        relative
        mx-auto
        my-55
        overflow-hidden
        w-[1600px]
        h-[600px]
      "
    >
      {/* "The" heading */}
      <h3
        className="
          absolute
          top-0
          left-[335px]
          text-[160px]
          text-[#404040]
          leading-[0.9]
          font-thin
          m-0
          p-0
          whitespace-nowrap
        "
      >
        The
      </h3>

      {/* Paragraph */}
      <p
        className="
          absolute
          top-[65px]
          left-[640px]
          w-[560px]
          text-[#404040]
          font-light
          leading-relaxed
          m-0
          p-0
          text-[14px]
        "
      >
        Experience deCube—a revolutionary decorating cube crafted from Astrolite,
        an exclusive material from the depths of space. With its sleek, modern
        aesthetic and cutting-edge composition, deCube stands as a testament
        to innovation and sophistication.
      </p>

      {/* Product image */}
      <div
        className="
          absolute
          top-[150px]
          left-[370px]
          w-[235px]
        "
      >
        <img
          src="/product-gif.gif"
          alt="Product Demo"
          className="w-full h-auto rounded-[15px]"
        />
      </div>

      {/* "Product" heading */}
      <h3
        className="
          absolute
          top-[150px]
          left-[630px]
          text-[160px]
          text-[#404040]
          leading-[0.9]
          font-thin
          m-0
          p-0
          whitespace-nowrap
        "
      >
        Product
      </h3>
    </div>
  );
};

export default Header;
