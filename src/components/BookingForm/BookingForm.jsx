import { useState } from "react";
import "./BookingForm.css";

const initialValues = { concern: "", fullName: "", phone: "", consent: false };

function BookingForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value.replace(name === "phone" ? /\D/g : /$^/g, ""),
    }));
  }

  function validate() {
    const nextErrors = {};
    if (!values.concern) nextErrors.concern = "Please select an option.";
    if (!values.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (values.phone.length < 10)
      nextErrors.phone = "Enter a valid 10 digit phone number.";
    if (!values.consent)
      nextErrors.consent = "Consent is required to continue.";
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(Object.keys(validationErrors).length === 0);
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Book a free scan"
    >
      <fieldset>
        <legend>Do you have Teeth Gaps or Crooked Teeth?</legend>
        <label>
          <input
            type="radio"
            name="concern"
            value="yes"
            checked={values.concern === "yes"}
            onChange={updateField}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="concern"
            value="no"
            checked={values.concern === "no"}
            onChange={updateField}
          />{" "}
          No
        </label>
      </fieldset>
      {errors.concern && <p className="field-error">{errors.concern}</p>}
      <div className="form-grid">
        <div>
          <label htmlFor="fullName">Full Name*</label>
          <input
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={updateField}
            placeholder="Ajay Kumar"
            aria-invalid={Boolean(errors.fullName)}
          />
        </div>
        <div>
          <label htmlFor="phone">Mobile number*</label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={updateField}
            placeholder="+91  Mobile number"
            inputMode="numeric"
            aria-invalid={Boolean(errors.phone)}
          />
        </div>
        <button className="button button--primary" type="submit">
          Book a Free Scan
        </button>
      </div>
      <label className="consent">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={updateField}
        />{" "}
        I hereby consent to receive calls / messages from Whistle and its
        partners.
      </label>
      {(errors.fullName || errors.phone || errors.consent) && (
        <p className="field-error">
          {errors.fullName || errors.phone || errors.consent}
        </p>
      )}
      {submitted && (
        <p className="form-success" role="status">
          Thank you! Our team will call you shortly.
        </p>
      )}
    </form>
  );
}
export default BookingForm;
