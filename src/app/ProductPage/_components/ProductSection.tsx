import React from 'react';
import MaskText from "@/components/MastText";

interface ProductSectionProps {
    name: string;
    dimensions: string;
    value: string;
    description: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ name, dimensions, value, description }) => {
    return (
        <div className="flex justify-between items-start px-8 py-16 mt-16 gap-8 mb-40">
            <div className="flex-1 p-8">
                <h2 className="text-4xl text-[#404040] mb-1">
                    <MaskText stagger={0.005} phrase={name} />
                </h2>
                <p className="my-2 text-[#404040]">
                    <MaskText stagger={0.005} phrase={`Dimensions: ${dimensions}`} />
                </p>
                <p className="my-2 text-[#404040]">
                    <MaskText stagger={0.005} phrase={`Value: ${value} sek`} />
                </p>
                <button className="text-[#95614E] font-normal relative inline-block cursor-pointer pb-0.5 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[225%] after:h-[1px] after:bg-[#95614E]
                    before:content-[''] before:absolute before:right-[-125%] before:bottom-0 before:w-[1px] before:h-[1.2em] before:bg-[#95614E]
                    hover:text-[#404040] hover:after:bg-[#404040] hover:before:bg-[#404040] transition-colors">
                    <MaskText stagger={0.005} phrase="Add to Cart" />
                </button>
            </div>
            <div className="flex-1 flex justify-center">
                <img 
                    src={`/${name}.gif`}
                    alt="Product Details" 
                    className="w-4/5 h-auto rounded-[15px]"
                />
            </div>
            <div className="flex-1 p-8 text-[#404040] leading-relaxed flex justify-end">
                <p className="text-right w-1/2">
                    <MaskText
                        stagger={0.005}
                        phrase={description}
                    />
                </p>
            </div>
        </div>
    );
};

export default ProductSection;