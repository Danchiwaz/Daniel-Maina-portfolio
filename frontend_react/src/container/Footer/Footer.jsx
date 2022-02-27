import React, { useState } from "react";
import { AppWrap } from "../../wrapper";
import MotionWrap from "../../wrapper/MotionWrap";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contacts",
      name: name,
      email: email,
      messages: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head_text">
        Take a <span>coffee</span> & <span>Chat</span> with Me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:mainadanielwachira@gmail.com" className="p-text">
            <p>mainadanielwachira@gmail.com</p>
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tell:+254 712747209" className="p-text">
            <p>+254 712747209</p>
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              placeholder="Your Message"
              className="p-text"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Messsage"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
