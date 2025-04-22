import React from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Props {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (p: Product) => void;
}

const CartAddButtons: React.FC<Props> = ({ products, cartItems, addToCart }) => (
  <div className="flex gap-2.5 justify-center mt-7 mb-15">
    {products.map((product) => {
      const inCart = cartItems.some((i) => i.id === product.id);
      return (
        <button
          key={product.id}
          onClick={() => addToCart(product)}
          disabled={inCart}
          className={`
            py-2 px-4 border border-gray-400 rounded-[16px]
            text-[#231919] transition-colors duration-200
            ${inCart
              ? "bg-[#cd9e7c] cursor-not-allowed"
              : "hover:border-[#0c0b0b] cursor-pointer"}
          `}
        >
          ADD {product.name}
        </button>
      );
    })}
  </div>
);

export default CartAddButtons;