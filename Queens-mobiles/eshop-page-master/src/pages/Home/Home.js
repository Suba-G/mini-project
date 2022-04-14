import React, { useEffect, useState, useRef } from 'react';
import ContainerDimensions from 'react-container-dimensions';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import './styles.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <>
      <Row>
        <ContainerDimensions>
          {({ width, height }) => (
            <Carousel
              activeIndex={index}
              direction={direction}
              onSelect={handleSelect}
              interval={null}
            >
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/image1.jpeg`)}
                  alt="First slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3><b>Always Focused on the Future</b></h3>
                  <p>
                    Our entire team in focussed on building Great 
                    Products and Great Relationships with our customer - now & into the future
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/img_slide2.jpg`)}
                  alt="Second slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>New Experience Great Price</h3>
                  <p>
                    We Offer Latest Launches of Premium mobiles....
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require(`../../static/products/img_slide3.jpg`)}
                  alt="Third slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>Our Mission</h3>
                  <p>
                    Sales Go up and down , Service Stays forever.
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )}
        </ContainerDimensions>
      </Row>

      <Row className="my-5">
        <Col xs={6} className="mx-auto">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              We strive to be a sustainable company that contributes to a 
              better world to connect people with their loved ones.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
    </>
  );
};

export default Home;
