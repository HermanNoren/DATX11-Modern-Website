import React from "react";


interface ProductCardProps {
  name: string;
  price: number;
  dimensions: string;
  image: string;
  quantity: number;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const formatPrice = (price: number) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  dimensions,
  image,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="mx-auto border border-gray-200 rounded-[10px] p-5 w-[70%] flex items-start gap-[10px] shadow-[5px_5px_15px_rgba(51,51,51,0.3)]">
      <img
        src={image}
        alt={`${name} Product`}
        className="mt-[1px] ml-[1px] mr-[30px] w-[150px] h-auto"
      />

      <div className="flex-1">
        <div className="mt-5 mb-[22px] grid grid-cols-[minmax(200px,1fr)_200px_120px] items-center gap-5 w-full text-[rgb(40,40,40)]">
          <h1 className="m-0 text-[31px] font-normal truncate whitespace-nowrap">
            {name}
          </h1>

          <div className="flex items-center justify-center gap-[10px] w-[190px]">
            <select
              value={quantity}
              onChange={(e) => onQuantityChange(Number(e.target.value))}
              className="
              appearance-none bg-no-repeat bg-right bg-[length:20px]
              p-[5px] pr-[25px] -mr-[-150px] border-none text-[20px] 
              w-[58px] h-[45px] text-center focus:outline-none focus:border-none
              "
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <p className="w-[260px] text-[22px] text-[rgb(40,40,40)] gap-[5px] whitespace-nowrap">
            <span>{formatPrice(price)}{' '}</span>
            <span>SEK</span>
          </p>
        </div>

        <div className="flex justify-between items-center w-full gap-5 pr-[10px] text-[rgb(40,40,40)]">
          <p className="flex-1">
            <strong>Dimensions:</strong> {dimensions}
          </p>
          <p
            onClick={onRemove}
            className="w-[80px] font-bold cursor-pointer text-[16px] whitespace-nowrap text-[rgb(192,37,50)]"
          >
            Remove
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
