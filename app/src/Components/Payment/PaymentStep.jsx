import React, { useState } from "react";
import "./checkout.css";
import Field from "./Field";
import { useCart } from "../Cartpage/CartContext";




const CARD_NUMBER_PATTERN = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

const PAYMENT_METHODS = [
    { id: "visa", label: "Visa", icon: "💳" },
    { id: "mastercard", label: "Mastercard", icon: "💳" },
    { id: "applepay", label: "Apple Pay", icon: "🍎" },
    { id: "paypal", label: "PayPal", icon: "🅿" },
];

function PaymentStep({ form, setForm, onBack, onOrderComplete }) {
    const { cartItem } = useCart();
    const orderTotal = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = orderTotal > 0 ? 25.00 : 0;
    const finalTotal = orderTotal > 0 ? orderTotal - discount : 0;

    const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
    const [selectedMethod, setSelectedMethod] = useState("card");
    const [errors, setErrors] = useState({});
    const [orderPlaced, setOrderPlaced] = useState(false);

    function validate() {
        const newErrors = {};

        const cleanedCardNumber = form.cardNumber.trim();
        if (!cleanedCardNumber) {
            newErrors.cardNumber = "Please enter your card number";
        } else if (!CARD_NUMBER_PATTERN.test(cleanedCardNumber)) {
            newErrors.cardNumber = "Please enter a valid 16-digit card number";
        }

        if (!form.expiry.trim()) {
            newErrors.expiry = "Please enter the expiry date";
        }

        if (!form.cvv.trim()) {
            newErrors.cvv = "Please enter the CVV";
        } else if (!/^\d{3,4}$/.test(form.cvv.trim())) {
            newErrors.cvv = "Please enter a valid CVV";
        }

        if (!form.nameOnCard.trim()) {
            newErrors.nameOnCard = "Please enter the name on card";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handlePlaceOrder() {

        if (finalTotal <= 0) {
            return;
        }
        if (validate()) {
            setOrderPlaced(true);
           
            onOrderComplete?.();
        }
    }

    if (orderPlaced) {
        return (
            <div className="order-success-overlay">
            <div className="checkout-card">
                <div className="order-success-box">
                    <h2 className="order-success-title">✅ Order Confirmed!</h2>
                    <p className="order-success-text">
                        Your order has been placed successfully. Thank you for shopping with us!
                    </p>
                </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-card">
            <h2 className="checkout-card-title">Payment details</h2>

            <Field label="Card number" required error={errors.cardNumber}>
                <input
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={update("cardNumber")}
                    className="checkout-input"
                />
            </Field>

            <div className="field-row-2">
                <Field label="Expiry date" required error={errors.expiry}>
                    <input
                        type="month"
                        value={form.expiry}
                        onChange={update("expiry")}
                        className="checkout-input"
                    />
                </Field>
                <Field label="CVV" required error={errors.cvv}>
                    <input
                        placeholder="•••"
                        value={form.cvv}
                        onChange={update("cvv")}
                        className="checkout-input"
                    />
                </Field>
            </div>

            <Field label="Name on card" required error={errors.nameOnCard}>
                <input
                    placeholder="John Doe"
                    value={form.nameOnCard}
                    onChange={update("nameOnCard")}
                    className="checkout-input"
                />
            </Field>

            <div className="methods-row">
                {PAYMENT_METHODS.map((m) => (
                    <button
                        type="button"
                        key={m.id}
                        onClick={() => setSelectedMethod(m.id)}
                        className={`method-btn ${selectedMethod === m.id ? "active" : ""}`}
                    >
                        <span aria-hidden="true">{m.icon}</span> {m.label}
                    </button>
                ))}
            </div>

            {finalTotal <= 0 && (
                <p className="empty-cart-warning">
                    Your cart is empty. Please add items before placing an order.
                </p>
            )}


            <div className="payment-actions">
                <button type="button" className="btn-back" onClick={onBack}>
                    ← Back
                </button>
                <button type="button" className="btn-primary" onClick={handlePlaceOrder} disabled={finalTotal <= 0}>
                    Place Order & Pay ${finalTotal.toFixed(2)}
                </button>
            </div>
        </div>
    );
}

export default PaymentStep;