import React from 'react';
import "./HeroStyles.css"
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import hero1img from "../assets/hero1img.jpeg"

const Hero = () => {
    
    return(
        
        <Container fluid className='hero-container'>
    <Row>
        <Col md={6} className='order-md-1 order-2'>
            {/* content for the left column */}
            <div className='l-hero-div'>
            <p className="be-someones-hero">Be Someone's Hero</p>
            <p className="learn-how">Learn how you can become a <br/> kidney donor</p>
            <div>
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform" target="_blank" rel="noreferrer">
             <button className="become-a-donor-btn">
             Become A Donor
              </button>
             </a>
         </div>
        </div>
        </Col>
        <Col md={6} className='order-md-2 order-1'>
            {/* content for the right column */}
            <div className="hero-img-div">
      <img className="hero-1-img"
      src={hero1img} alt="intro" /> 
    </div>
        </Col>
    </Row>
    </Container>
//     <>
//    <div className="columns">
//         <p className="be-someone-s-hero">Be Someone's Hero</p>
//          <p className="learn-how-you-can-become-a-kidney-donor">Learn how you can become a kidney donor</p>
//         <div>
//             <a href="https://docs.google.com/forms/d/e/1FAIpQLSdXWz_LOPWMUUyTefH3-3R2u4myBsZyhB9EuPY-UW_kdQVWVw/viewform" target="_blank" rel="noreferrer">
//             <button className="become-a-donor-btn">
//             Become A Donor
//              </button>
//             </a>
//         </div>
//         <div className="hero-img-container">
//       <img className="hero1img"
//        src={hero1img} alt="intro" /> 
//      </div>
//     </div>
// </>
    );
}

export default Hero;