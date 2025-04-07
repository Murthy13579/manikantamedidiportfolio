import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
      <section id="contact" className="contact-section">
        <h1>Contact Me</h1>
        <p>You can reach me at:</p>
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:medidimanikanta6@gmail.com">medidimanikanta6@gmail.com</a>
        </div>
        <div className="contact-item">
          <strong>Phone:</strong> +1 9409774042
        </div>
        <div className="contact-item">
          <strong>LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/manikanta-medidi-17896a21a/" target="_blank" rel="noopener noreferrer">
            My LinkedIn Profile
          </a>
        </div>
      </section>
    );
  };
  
export default Contact;
  
  
