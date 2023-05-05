import React from 'react';
import "./HeroStyles.css"
// import {Row, Col} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import hero1img from "../assets/hero1img.jpeg"

const Hero = () => {
    
    return(
    //     <Container className='hero-container'>
    // <Row>
    //     <Col md={12}>
    //         {/* content for the left column AF */}
    //         <p className="be-someone-s-hero">Be Someone's Hero</p>
    //         <p className="learn-how-you-can-become-a-kidney-donor">Learn how you can become a kidney donor</p>
    //         <div className="donor-btn-container">
    //     <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform"
    //     className="donor-btn">Become A Donor </a>
    //     </div>
    //     </Col>
    //     <Col md={12}>
    //         {/* content for the right column */}
    //         <div className="">
    //   <img className="hero1img"
    //   src={hero1img} alt="intro" /> 
    // </div>
    //     </Col>
    // </Row>
    // </Container>
    <>
   <div className="columns">
        <p className="be-someone-s-hero">Be Someone's Hero</p>
         <p className="learn-how-you-can-become-a-kidney-donor">Learn how you can become a kidney donor</p>
        <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform" target="_blank" rel="noreferrer">
            <button className="become-a-donor-btn">
            Become A Donor
             </button>
            </a>
        </div>
        <div className="hero-img-container">
      <img className="hero1img"
       src={hero1img} alt="intro" /> 
     </div>
    </div>
</>
    );
}

export default Hero;