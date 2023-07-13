import React from 'react';
import "./HeroStyles.css"
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import hero1img from "../assets/hero1img.jpeg"
import BecomeDonorBtn from '../components/BecomeDonorBtn'

const Hero = () => {
    
    return(
        
        <Container fluid className='hero-container'>
    <Row>
        <Col md={6}  className='l-hero order-md-1 order-2'>
            <div className='l-hero-div'>
                
                <p className="be-someones-hero">Be Someone's Hero</p>
                <p className="learn-how">Learn how you can become a <br/> kidney donor</p>
              
                <BecomeDonorBtn />
                
        </div>
        </Col>
        <Col md={6}  className='r-hero order-md-2 order-1'>
      <img className="hero-1-img"
      src={hero1img} alt="intro" /> 
  
        </Col>
    </Row>
    </Container>

    );
}

export default Hero;