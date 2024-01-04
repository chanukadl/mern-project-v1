import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import Star from "@mui/icons-material/Star";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Testimonial = () => {
  return (
    <div className="work-section-wrapper testimoial">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h2 className="primary-heading text-center">What They Are Saying</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="testimonial-section-bottom">
              <img src={ProfilePic} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
              </p>
              <div className="testimonials-stars-container">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h2>J S Sophi</h2>
            </div>
          </Col>
          <Col>
            <div className="testimonial-section-bottom">
              <img src={ProfilePic} alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
              </p>
              <div className="testimonials-stars-container">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <h2>J S Sophi</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;