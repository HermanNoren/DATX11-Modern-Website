"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "./_components/cartlogic";
import ProductCard from "./_components/ProductCard";
import CartHeader from "./_components/CartHeader";
import CartAddButtons from "./_components/CartAddButtons";
import CartProductGrid from "./_components/CartProductGrid";
import CartCheckout from "./_components/CartCheckout";

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

const PRODUCTS: Product[] = [
  {
    id: "petite",
    name: "PETITE",
    price: 4999,
    dimensions: "10x10x10 cm",
    image: "/PETITE.gif",
  },
  {
    id: "regal",
    name: "REGAL",
    price: 7999,
    dimensions: "20x20x20cm",
    image: "/REGAL.gif",
  },
  {
    id: "imperial",
    name: "IMPERIAL",
    price: 9999,
    dimensions: "30x30x30cm",
    image: "/IMPERIAL.gif",
  },
];

const CheckoutPage: React.FC = () => {
  const {
    cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
    updateQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      <div className="flex flex-col items-center max-w-[1250px] mx-auto py-8">
        <CartHeader totalPrice={totalPrice} />
        <CartAddButtons
          products={PRODUCTS}
          cartItems={cartItems}
          addToCart={addToCart}/>
        <CartProductGrid
          cartItems={cartItems}
          onRemove={removeFromCart}
          onQuantityChange={updateQuantity}/>
        <CartCheckout />
      </div>
    </div>
  );
};

export default CheckoutPage;
