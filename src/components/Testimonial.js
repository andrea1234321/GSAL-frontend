import "./TestimonialStyles.css"
import avatar from "../assets/avatar.png"

import React from 'react'

const Testimonial = () => {
  return (
    <>
    <div>
      <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." </h1>
    </div>
    <h2>First Last</h2>
    <h3>@handle</h3>
    <div className="avatar-container">
      <img className="avatar"
       src={avatar} alt="avatar" /> 
     </div>
    </>
  )
}

export default Testimonial
