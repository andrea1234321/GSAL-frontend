import "./TestimonialStyles.css"
import avatar from "../assets/avatar.png"
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const Testimonial = () => {
  return (
    <>
  
     <Container fluid className='testimonial-container  testimonial-container'>
      <Row className='justify-content-center align-items-center testimonial-row'>
        <Col xs={12} sm={6} md={4} className='col-testimonial'>
          <div className='testimonial-content-div'>
            <div className='p-div'>
            <p>"I was in a very dark state of mind. I just didn't see any hope in finding a donor. Kristian and his crew helped me face my fears, educated me on shared my testimony. A friend of mine had no idea I needed a kidney and well, she is my lifesaver forever."</p>
            </div>
            <h2>Michael Browning</h2>
            
            <div className="avatar-container">
              <img className="avatar" src={avatar} alt="avatar" /> 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Testimonial
