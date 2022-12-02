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
<>

          </>
  
  );
};

export default ContactForm;