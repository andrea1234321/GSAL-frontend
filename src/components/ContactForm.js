import React from 'react';
import "./ContactFormStyles.css"


const ContactForm = () => {
    return (
      <div className='contact-form-container'>
        <h1 className='contact-title'>
          Contact
          </h1>
        <p className='contact-info'>Thank you for your interest in GoSaveALife, a non-profit organization dedicated to raising awareness about kidney donation and making a positive impact on the lives of those in need. Whether you're looking to learn more about kidney donation or have other inquiries related to our cause, we are here to assist you. Please fill out the contact form below, and we will respond to your message as soon as possible.</p>
        <form className='contact-form'>
          <input className='contact-name' placeholder='Name'></input>
          <input className='contact-email' placeholder='Email'></input>
          <textarea className='contact-message' placeholder='Message' rows='4' cols='50' ></textarea>
          <button className='contact-submit' type='submit'>Send Message</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm