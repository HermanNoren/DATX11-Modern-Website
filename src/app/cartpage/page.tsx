import "./cartpage.css";
import { ShoppingCart, ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <ChevronLeft className="back-icon"></ChevronLeft>
        <h1 className="cart-title">deCube shopping bag</h1>
        <ShoppingCart className="cart-icon"></ShoppingCart>
      </div>
      <div className="cart-text">
        <p className="bag-total">Bag total: 26 999 sek</p>
        <p className="shipping">Worldwide shipping and no returns</p>
      </div>

      <div className="cart-line"></div>
      <div className="cart-container">
        <div className="cart-grid">
          {/* PETITE */}
          <div className="cart-card">
            <img src="/petit.png" alt="Petite Cube" className="cart-image" />
            <div className="cart-details">
              <h2 className="cart-product-title">PETITE</h2>

              <p className="cart-dimensions">
                <strong>Dimensions:</strong> 10x10x10 cm
              </p>

              <div className="cart-quantity-price">
                <div className="cart-quantity">
                  <span>1</span>
                  <ChevronDown className="down-icon" />
                </div>
                <p className="cart-price">7999,00 sek</p>
              </div>
              <p className="cart-remove">remove</p>
            </div>
          </div>
          <div className="cart-card">
            <img src="/petit.png" alt="Petite Cube" className="cart-image" />
            <div className="cart-details">
              <h2 className="cart-product-title">PETITE</h2>

              <p className="cart-dimensions">
                <strong>Dimensions:</strong> 10x10x10 cm
              </p>
              <div className="cart-quantity-price">
                <div className="cart-quantity">
                  <span>1</span>
                  <ChevronDown className="down-icon" />
                </div>
                <p className="cart-price">7999,00 sek</p>
              </div>
              <p className="cart-remove">remove</p>
            </div>
          </div>
          <div className="cart-card">
            <img src="/petit.png" alt="Petite Cube" className="cart-image" />
            <div className="cart-details">
              <h2 className="cart-product-title">PETITE</h2>

              <p className="cart-dimensions">
                <strong>Dimensions:</strong> 10x10x10 cm
              </p>
              <div className="cart-quantity-price">
                <div className="cart-quantity">
                  <span>1</span>
                  <ChevronDown className="down-icon" />
                </div>
                <p className="cart-price">7999,00 sek</p>
              </div>
              <p className="cart-price">7999,00 sek</p>
              <p className="cart-remove">remove</p>
            </div>
          </div>
        </div>
        <Link href="/lastpage" className="checkout">
          <button className="checkout-button">Checkout</button>
        </Link>

        <p className="disclaimer">
          DISCLAIMER: This isn’t a real checkout, pressing the <br />
          button brings you to the end of the site.
        </p>
      </div>
      <div className="margin">.</div>
    </div>
  );
}

export default CartPage;
