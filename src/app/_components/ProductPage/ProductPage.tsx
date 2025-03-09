import React from "react";
import "./ProductPage.css";

const Footer: React.FC = () => {
  return (
    <div className="ProductPage">
        <h3 className="header">The Product.</h3>
        <div className="header-info">
            <div className="text-container">
                <p className="product-header-text">
                    Experience deCube—a revolutionary decorating cube crafted from 
                    Astrolite, an exclusive material from the depths of space. With its 
                    sleek, modern aesthetic and cutting-edge composition, deCube 
                    stands as a testament to innovation and sophistication.
                </p>
            </div>
            <div className="product-gif-container">
                <img 
                    src="/product-gif.gif" 
                    alt="Product Demo" 
                    className="product-gif"
                />
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2>PETITE</h2>
                <p>Dimensions: 10x10x10 cm</p>
                <p>Value: 4999 sek </p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="/cube-gif.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>The Petit, a refined choice for those who value rarity in a compact form. 
                    A favorite among collectors looking to own a rare piece of the future. 
                    Whether displayed on a desk or stored as a long-term asset, 
                    it carries the unmistakable presence of something beyond Earth. </p>
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2>REGAL</h2>
                <p>Dimensions: 20x20x20 cm</p>
                <p>Value: 7999 sek</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="cube-gif.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>The Regal, a perfect balance of rarity and prestige, 
                   the go-to choice for industry leaders and forward-thinkers. 
                   Coveted yet attainable, it's the cube that moves industries and closes deals. 
                   When a Regal is in your hands, you hold more than metal—you hold progress.</p>
            </div>
        </div>
        <div className="product-details-section">
            <div className="product-info-left">
                <h2>IMPERIAL</h2>
                <p>Dimensions: 30x30x30 cm</p>
                <p>Value: 9999 sek</p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
            <div className="product-gif-middle">
                <img 
                    src="/cube-gif.gif" 
                    alt="Product Details" 
                    className="details-gif"
                />
            </div>
            <div className="product-info-right">
                <p>The Imperial, the largest and boldest, A monolith of Astrolite, 
                    commanding attention whether placed in a corporate headquarters, 
                    or private collection. Its sheer presence is a testament to those who operate on a grander scale. 
                    To own an Imperial is to stake a claim in the future itself.</p>
            </div>
        </div>
        <div className="fixed-text">CUBE/KUB/CUBO/KUUTIO/立方体</div>
        <div className="brown-section">
            <div className="banner-text-container">
                <span className="banner-text left">CUBE/KUB/CUBO/KUUTIO/立方体</span>
                <span className="banner-text right">CUBE/KUB/CUBO/KUUTIO/立方体</span>
            </div>
            <div className="brown-section-middle">
                <h2 className="middle-text">
                    Have you chosen your next most<br/>
                    priced possession?
                </h2>
                <img 
                    src="/cube-element.gif" 
                    alt="Cube Animation" 
                    className="brown-section-gif" 
                    />
                <span className="cart">Go to Cart</span>
            </div>
        </div>
    </div>
  );
};

export default Footer;