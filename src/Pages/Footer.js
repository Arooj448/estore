import React from "react";
import { Container, Row , Col } from "react-bootstrap";


const Footer =() =>{

    return(
        <footer className="footer">
        <Container>
            <Row>
                 {/* Logo and Credits */}
                <Col xs="12" md="4"  className="text-center text-md-left">
                <div className="footer-logo">
              <img 
                src="https://positivestories.scot/wp-content/uploads/wp_dndcf7_uploads/2023/01/308506825_400761818892843_8599323709658723441_n-2.jpg" 
                alt="Logo" 
                className="logo-img" 
              />
            </div>
            <p className="credits">© 2024 LimeLight. All Rights Reserved.</p>
                
                </Col>
                 {/* Navigation Links */}
          <Col xs={12} md={4} className="text-center">
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* Contact Details */}
          <Col xs={12} md={4} className="text-center text-md-right">
            <h5>Contact Us</h5>
            <p>Email: support@yourbrand.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
            </Row>

        </Container>
        </footer>
    )



};

export default Footer;