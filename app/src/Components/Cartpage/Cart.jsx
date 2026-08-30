import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";


import './Cart.css';

function Cart() {
  const { cartItem, increase, decrease, remove } = useCart();

  const totalProductsCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);
  const orderTotal = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // حساب الخصم بنسبة 10%
  const discountRate = 0.10;
  const discount = orderTotal * discountRate;
  const finalTotal = orderTotal - discount;

  const navigate = useNavigate();


  return (
    <div className="cart-v2-page">
      <div className="cart-v2-container">

        <p className="cart-v2-subtitle">{cartItem.length} Products</p>

        {cartItem.length === 0 ? (
          <div className="cart-v2-empty">
            <h3>Empty</h3>
            <Link to="/product" className="cart-v2-back-btn">
              ← Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-v2-layout">
            
            <div className="cart-v2-items-list">
              {cartItem.map((item) => (
                <div key={item.id} className="cart-v2-card">
                  
                  <div className="cart-v2-product-box">
                    <div className="cart-v2-img-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="cart-v2-info">
                      <h3 className="cart-v2-item-title">{item.title}</h3>
                      <span className="cart-v2-item-cat">{item.category || 'Electronics'}</span>
                    </div>
                  </div>

                  <div className="cart-v2-counter">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>

                  <div className="cart-v2-price-group">
                    <span className="cart-v2-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <div className="cart-v2-actions">
                      <span className="cart-v2-icon">♡</span>
                      <span className="cart-v2-icon" onClick={() => remove(item.id)}>🗑</span>
                    </div>
                  </div>

                </div>
              ))}

              <Link to="/product" className="cart-v2-back-btn">
                ← Continue Shopping
              </Link>
            </div>

            <div className="cart-v2-summary-wrapper">
              <div className="cart-v2-summary-card">
                <h2 className="cart-v2-summary-title">Your Order</h2>

                <div className="cart-v2-row">
                  <span>Number of Products</span>
                  <span className="cart-v2-val-dark">{totalProductsCount}</span>
                </div>

                <div className="cart-v2-row">
                  <span>Order Total</span>
                  <span className="cart-v2-val-dark">${orderTotal.toFixed(2)}</span>
                </div>

                <div className="cart-v2-row">
                  <span>Shipping</span>
                  <span className="cart-v2-val-green">Free</span>
                </div>

                <div className="cart-v2-row">
                  <span className="cart-v2-val-green">Discount (10%)</span>
                  <span className="cart-v2-val-green">-${discount.toFixed(2)}</span>
                </div>

                <div className="cart-v2-divider"></div>

                <div className="cart-v2-total-row">
                  <span>Total</span>
                  <span className="cart-v2-total-price">${finalTotal.toFixed(2)}</span>
                </div>

                <div className="cart-v2-promo-box">
                  <input type="text" placeholder="Promo code" />
                  <button className="cart-v2-apply-btn">Apply</button>
                </div>

                  <button className="cart-v2-checkout-btn" onClick={() => navigate("/payment")}>
                  Proceed to Checkout →
                </button>

                <div className="cart-v2-badges">
                  <span className="cart-v2-badge">💳</span>
                  <span className="cart-v2-badge">PayPal</span>
                  <span className="cart-v2-badge">Pay</span>
                  <span className="cart-v2-badge">VISA</span>
                  <span className="cart-v2-badge">MC</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;