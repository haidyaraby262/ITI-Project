
import "./checkout.css";

function Field({ label, required, error, children }) {
    return (

        <div className="field">
            <label className="field-label">
                {label} {required && <span className="field-required">*</span>}
            </label>
            {children}
            {error && <p className="field-error">{error}</p>}
        </div>
    );
}

export default Field;






















