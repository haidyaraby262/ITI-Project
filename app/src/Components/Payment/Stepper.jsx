import React from "react";
import "./checkout.css";

function Stepper({ step }) {
    return (


        <div className="stepper-row">
            <div className="stepper-item">
                <div className={`stepper-circle ${step >= 1 ? "active" : ""}`}>
                    {step > 1 ? "✓" : "1"}
                </div>
                <span className={`stepper-label ${step === 1 ? "active" : ""}`}>Delivery</span>
            </div>

            <div className="stepper-line" />

            <div className="stepper-item">
                <div className={`stepper-circle ${step >= 2 ? "active" : ""}`}>
                    {step > 2 ? "✓" : "2"}
                </div>
                <span className={`stepper-label ${step === 2 ? "active" : ""}`}>Confirm & Pay</span>
            </div>

        </div>





    );
}

export default Stepper;
