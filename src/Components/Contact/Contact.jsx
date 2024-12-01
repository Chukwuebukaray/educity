import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm("service_7o2m86v", "template_2ioiv98", form.current, {
        publicKey: "aS7-5xxi_v-3kh54y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setResult("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          details below. Your feedbacks, questions and suggestions are important
          to us as we strive to provide exceptional service to our university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@ebuka.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            08141771930
          </li>
          <li>
            <img src={location_icon} alt="" />
            46/48 Muyuliu Oshode street <br />
            Ejigbo, Lagos.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label> Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          ></input>
          <label> Your Mobile Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          ></input>
          <label> Write your message here</label>
          <textarea
            name="messages"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
