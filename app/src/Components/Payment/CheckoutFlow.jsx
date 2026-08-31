import { useState } from "react";
import "./checkout.css";
import Stepper from "./Stepper";
import DeliveryStep from "./DeliveryStep";
import PaymentStep from "./PaymentStep";
import OrderSummary from "./OrderSummary";

 function CheckoutFlow() {
    const [step, setStep] = useState(1);
    const [discountCode, setDiscountCode] = useState("");
    const [form, setForm] = useState({
        email: "", firstName: "", lastName: "", phone: "",
        address: "", city: "", postcode: "",
        cardNumber: "", expiry: "", cvv: "", nameOnCard: "",
    });

    return (
        <div className="checkout-page">
            <div className="checkout-wrapper">
                <Stepper step={step} />

                <div className="checkout-layout">
                    {step === 1 ? (
                        <DeliveryStep form={form} setForm={setForm} onContinue={() => setStep(2)} />
                    ) : (
                            <PaymentStep form={form} setForm={setForm} onBack={() => setStep(1)}
                                onOrderComplete={() => setStep(3)} />
                    )}

                    {step !== 3 && (
                        <OrderSummary discountCode={discountCode} setDiscountCode={setDiscountCode} />
                    )}

                </div>
            </div>
        </div>
    );
}



export default CheckoutFlow;