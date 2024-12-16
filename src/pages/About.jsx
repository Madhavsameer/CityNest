import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import Slider from "react-slick";
import "../styles/About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sd1 from "../assets/sd1.jpg"
import sd2 from "../assets/sd2.jpg"
import sd3 from "../assets/sd3.jpg"

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <section id="about-us">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about__content">
              <h2>About City Nest</h2>
              <p>
                At City Nest, we specialize in providing top-tier real estate and to-let services in Patna. Whether you're looking for a new home, office space, or rental property, our expert team is here to help you find the perfect place. We are committed to offering quality service, transparency, and ensuring a smooth real estate experience for both property owners and tenants.
              </p>

              <div className="about__counter">
                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={1000} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">1,000+ Properties Listed</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={500} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">500+ Happy Clients</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={200} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">200+ Properties Rented</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={50} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">50+ Successful Transactions Per Month</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="mb-4 mb-lg-0">
            <div className="about__img">
              <Slider {...settings}>
                <div>
                  <img
                    src={sd1}
                    alt="Real Estate Property"
                    className="w-100"
                  />
                </div>
                <div>
                  <img
                    src={sd3}
                    alt="Commercial Space"
                    className="w-100"
                  />
                </div>
                <div>
                  <img
                    src={sd2}
                    alt="Luxury Apartment"
                    className="w-100"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
