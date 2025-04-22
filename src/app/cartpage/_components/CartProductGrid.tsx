import React from "react";
import ProductCard from "./ProductCard";

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
  cartItems: CartItem[];
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, qty: number) => void;
}

const CartProductGrid: React.FC<Props> = ({
  cartItems,
  onRemove,
  onQuantityChange,
}) => (
  <div className="flex flex-col items-center gap-[55px] w-[1400px]">
    {cartItems.map((item) => (
      <ProductCard
        key={item.id}
        name={item.name}
        price={item.price * item.quantity}
        dimensions={item.dimensions}
        image={item.image}
        quantity={item.quantity}
        onRemove={() => onRemove(item.id)}
        onQuantityChange={(q) => onQuantityChange(item.id, q)}
      />
    ))}
  </div>
);

export default CartProductGrid;