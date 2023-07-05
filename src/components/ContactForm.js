import React from 'react';
import "./ContactFormStyles.css"


const ContactForm = () => {
    return (
      <div className='contact-form-container'>
        <h1 className='contact-title'>
          Contact
          </h1>
        <p className='contact-info'>Thank you for your interest in GoSaveALife, a non-profit organization dedicated to raising awareness about kidney donation and making a positive impact on the lives of those in need. Whether you're looking to learn more about kidney donation or have other inquiries related to our cause, we are here to assist you. Please fill out the contact form below, and we will respond to your message as soon as possible.</p>
        <form className='contact-form' action='https://getform.io/f/e8adcf4e-245c-4dbd-ad88-c608836c8932' method="POST">
          <input className='contact-name' placeholder='Name' type='text' name='name'></input>
          <input className='contact-email' placeholder='Email' type='email' name='email'></input>
          <textarea className='contact-message' placeholder='Message' rows='4' cols='50' name='textarea'></textarea>
          <button className='contact-submit' type='submit'>Send Message</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm