import "./TestimonialStyles.css"
import avatar from "../assets/avatar.png"
import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'

const Testimonial = () => {
  return (
    <>
    {/* <div>
    <div>
      <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." </h1>
    </div>
    <h2>First Last</h2>
    <h3>@handle</h3>
    <div className="avatar-container">
      <img className="avatar"
       src={avatar} alt="avatar" /> 
     </div>
     </div> */}
     <Container fluid className='testimonial-container  testimonial-container'>
      <Row className='justify-content-center align-items-center testimonial-row'>
        <Col xs={12} sm={6} md={4}>
          <div className='testimonial-content-div'>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            <h2>First Last</h2>
            <h3>@handle</h3>
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
