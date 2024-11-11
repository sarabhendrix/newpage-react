import { useState } from "react";
import "./contact.css";

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f23b2a6e-0c2c-4d0b-a144-eb3c3915d404");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <section id="contact-form">
        <form onSubmit={onSubmit}>
          <p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required />
          </p>
  
          <p>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </p>
  
          <p>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
          </p>
  
          <p>
            <button type="submit">Submit Form</button>
          </p>
        </form>
        <span>{result}</span>
      </section>
  
    );
  }