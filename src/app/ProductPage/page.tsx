import React from "react";
import "./ProductPage.css";
import MaskText from "@/components/MastText";

const Footer: React.FC = () => {
  return (
    <div className="ProductPage">
        <div className="header-container">
            <div className="header-top">
                <h3 className="the-text">The</h3>
                <p className="product-header-text">
                    Experience deCube—a revolutionary decorating cube crafted from 
                    Astrolite, an exclusive material from the depths of space. With its 
                    sleek, modern aesthetic and cutting-edge composition, deCube 
                    stands as a testament to innovation and sophistication.
                </p>
            </div>
            <div className="header-bottom">
                <div className="product-gif-container">
                    <img 
                        src="/product-gif.gif" 
                        alt="Product Demo" 
                        className="product-gif"
                    />
                </div>
                <h3 className="product-text">Product</h3>
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2><MaskText stagger={0.005} phrase="PETITE" /></h2>
                <p><MaskText stagger={0.005} phrase="Dimensions: 10x10x10 cm" /></p>
                <p><MaskText stagger={0.005} phrase="Value: 4999 sek" /></p>
                <span className="add-to-cart-btn">
                    <MaskText stagger={0.005} phrase="Add to Cart" />
                </span>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="/PETITE.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>
                    <MaskText
                    stagger={0.005}
                    phrase="The Petit, a refined choice for those who value rarity in a compact form.
                    A favorite among collectors looking to own a rare piece of the future.
                    Whether displayed on a desk or stored as a long-term asset, 
                    it carries the unmistakable presence of something beyond Earth."
                    />
                </p>
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2><MaskText stagger={0.005} phrase="REGAL" /></h2>
                <p><MaskText stagger={0.005} phrase="Dimensions: 20x20x20 cm" /></p>
                <p><MaskText stagger={0.005} phrase="Value: 7999 sek" /></p>
                <span className="add-to-cart-btn">
                    <MaskText stagger={0.005} phrase="Add to Cart" />
                </span>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="REGAL.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>
                    <MaskText
                    stagger={0.005}
                    phrase="The Regal, a perfect balance of rarity and prestige, 
                    the go-to choice for industry leaders and forward-thinkers. 
                    Coveted yet attainable, it’s the cube that moves industries and closes deals. 
                    When a Regal is in your hands, you hold more than metal—you hold progress."
                    />
                </p>
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2><MaskText stagger={0.005} phrase="IMPERIAL" /></h2>
                <p><MaskText stagger={0.005} phrase="Dimensions: 30x30x30 cm" /></p>
                <p><MaskText stagger={0.005} phrase="Value: 9999 sek" /></p>
                <span className="add-to-cart-btn">
                    <MaskText stagger={0.005} phrase="Add to Cart" />
                </span>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="/IMPERIAL.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>
                    <MaskText
                    stagger={0.005}
                    phrase="The Imperial, the largest and boldest, A monolith of Astrolite, 
                    commanding attention whether placed in a corporate headquarters, or private collection. 
                    Its sheer presence is a testament to those who operate on a grander scale. 
                    To own an Imperial is to stake a claim in the future itself."
                    />
                </p>
            </div>
        </div>
    </div>
  );
};

export default Footer;