import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DarkVariantExample() {
  return (

    <Container fluid>
      <Row>
        <Col className='p-0'><Carousel data-bs-theme="dark" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/slider1.jpg")}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/slider2.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/slider3.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel></Col>
      </Row>
    </Container>


  );
}

export default DarkVariantExample;