import React from "react";

interface Props {
  totalPrice: number;
}

const formatPrice = (price: number) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const CartHeader: React.FC<Props> = ({ totalPrice }) => (
  <div className="flex flex-col items-center gap-5 w-full mt-12 mb-5">
    <h2 className="text-[3rem] text-[#282828] font-light">
      Bag total: {formatPrice(totalPrice)} SEK
    </h2>
    <p className="text-[1.5rem] text-[#282828] font-light text-center">
      Worldwide shipping and no returns
    </p>
  </div>
);

export default CartHeader;