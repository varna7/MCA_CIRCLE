import React, { useState } from "react";
import './contactform.css'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="msg1">Thank you!</div>
        <div className="msg2">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <h2>Contact Us</h2>
      <div className="formItem">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="formInput"
          required
        />
      </div>
      <div className="formItem">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="formInput"
          required
        />
      </div>
      <div className="formItem">
        <textarea
          placeholder="Your message"
          name="message"
          className="formInput"
          required
        />
      </div>
      <div className="formItem">
        <button
          className="formButton"
          type="submit"
        >
          Send 
        </button>
      </div>
    </form>
  );
};

export default ContactForm;