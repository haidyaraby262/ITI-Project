import { useState } from "react";
import "./checkout.css";
import Field from "./Field";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^(\+20|0020|0)?1[0125][0-9]{8}$/;
const POSTCODE_PATTERN = /^\d{5}$/;

function DeliveryStep({ form, setForm, onContinue }) {
    const [errors, setErrors] = useState({});
    const update = (key) => (e) => {
        setForm({ ...form, [key]: e.target.value });
        if (errors[key]) {
            setErrors({ ...errors, [key]: null });
        }
    };

    function validate() {
        const newErrors = {};

        if (!form.email.trim()) {
            newErrors.email = "Please enter your email address";
        } else if (!EMAIL_PATTERN.test(form.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!form.firstName.trim()) newErrors.firstName = "Please enter your first name";
        if (!form.lastName.trim()) newErrors.lastName = "Please enter your last name";

        const cleanedPhone = form.phone.trim().replace(/[\s()-]/g, "");
        if (!form.phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        } else if (!PHONE_PATTERN.test(cleanedPhone)) {
            newErrors.phone = "Please enter a valid Egyptian mobile number (e.g. 01012345678)";
        }

        if (!form.address.trim()) newErrors.address = "Please enter your address";

        if (form.postcode.trim() && !POSTCODE_PATTERN.test(form.postcode.trim())) {
            newErrors.postcode = "Please enter a valid 5-digit postcode";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleContinue() {
        if (validate()) {
            onContinue();
        }
    }

    return (
        <div className="checkout-card">
            <h2 className="checkout-card-title">Checkout</h2>

            <Field label="Email address" required error={errors.email}>
                <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update("email")}
                    className="checkout-input"
                />
                <p className="field-hint">We'll send an order confirmation to this address.</p>
            </Field>

            <h3 className="checkout-section-title">Delivery address</h3>

            <div className="field-row-2">
                <Field label="First name" required error={errors.firstName}>
                    <input value={form.firstName} onChange={update("firstName")} className="checkout-input" />
                </Field>
                <Field label="Last name" required error={errors.lastName}>
                    <input value={form.lastName} onChange={update("lastName")} className="checkout-input" />
                </Field>
            </div>

            <Field label="Phone number" required error={errors.phone}>
                <input
                    placeholder="01XXXXXXXXX"
                    value={form.phone}
                    onChange={update("phone")}
                    className="checkout-input"
                />
            </Field>

            <Field label="Address" required error={errors.address}>
                <input
                    placeholder="Street address"
                    value={form.address}
                    onChange={update("address")}
                    className="checkout-input"
                />
            </Field>

            <div className="field-row-2">
                <Field label="City">
                    <input value={form.city} onChange={update("city")} className="checkout-input" />
                </Field>
                <Field label="Postcode" error={errors.postcode}>
                    <input
                        placeholder="XXXXX"
                        value={form.postcode}
                        onChange={update("postcode")}
                        className="checkout-input"
                    />
                </Field>
            </div>

            <h3 className="checkout-section-title">Delivery options</h3>
            <div className="delivery-option">
                <span className="radio-outer">
                    <span className="radio-inner" />
                </span>
                <div>
                    <p className="delivery-option-title">Standard — Free</p>
                    <p className="delivery-option-sub">Free delivery</p>
                </div>
            </div>

            <button type="button" className="btn-primary" onClick={handleContinue}>
                Continue to Payment →
            </button>
        </div>
    );
}

export default DeliveryStep;