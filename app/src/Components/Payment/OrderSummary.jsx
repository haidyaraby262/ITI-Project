import React from "react";
import "./checkout.css";
import { useCart } from "../Cartpage/CartContext";

function OrderSummary({ discountCode, setDiscountCode }) {
    const { cartItem } = useCart();

    const orderTotal = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = orderTotal > 0 ? 25.00 : 0;
    const finalTotal = orderTotal > 0 ? orderTotal - discount : 0;

    return (
        <div className="summary-card">
            <div className="summary-header-row">
                <h3 className="summary-title">Your order</h3>
                <button className="show-summary-btn" type="button">
                    Show summary ▾
                </button>
            </div>

            <div className="summary-row">
                <span className="summary-label-blue">Subtotal</span>
                <span className="summary-value">${orderTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
                <span className="summary-label-blue">Delivery Cost Standard — Free</span>
                <span className="summary-value-green">$0.00</span>
            </div>

            <div className="summary-row">
                <span className="summary-label-blue">Discount</span>
                <span className="summary-value-green">-${discount.toFixed(2)}</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-total-row">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
            </div>

            <div className="summary-divider" />

            {/* <label className="discount-label">+ Discount code?</label>
            <div className="discount-row">
                <input
                    type="text"
                    placeholder="Enter code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="discount-input"
                />
                <button type="button" className="btn-apply">
                    Apply
                </button>
            </div> */}
        </div>
    );
}

export default OrderSummary;