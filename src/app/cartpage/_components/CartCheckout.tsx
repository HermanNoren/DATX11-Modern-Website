import React from "react";
import TransitionLink from "@/components/header/TransitionLink";

const CartCheckout: React.FC = () => (
  <div className="flex flex-col items-center w-full mt-10 mb-20">
    <TransitionLink href="/lastpage">
      <button
        className="
          py-[0.8rem] px-[3rem] text-[1.2rem] font-bold
          text-white bg-[#9b7860] rounded-[15px] transition-colors
          duration-200 cursor-pointer hover:bg-[#f2ceb4]
        "
      >
        CHECKOUT
      </button>
    </TransitionLink>
    <p className="text-[14px] text-[#282828] font-light text-center mt-4">
      DISCLAIMER: this isn't a real checkout. pressing the
      <br />
      button brings you to the end of the site
    </p>
  </div>
);

export default CartCheckout;