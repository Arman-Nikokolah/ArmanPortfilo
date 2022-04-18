import React from "react";
import styled from "styled-components";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import mony from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { About, Description, Image } from "../styles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { ScrollAnimate } from "../Animate";

const ServicesSection = () => {
  const [element, view] = useInView({ threshold: 0.5 });
  const controles = useAnimation();

  if (view) {
    controles.start("show");
  } else {
    controles.start("hidden");
  }

  return (
    <Services
      ref={element}
      variants={ScrollAnimate}
      animate={controles}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* 2 */}
          <Card>
            <div className="icon">
              <img src={mony} alt="clock" />
              <h3>Mony</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* 3 */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          {/* 4 */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  display: block;
  h3 {
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-left: 0.75rem;
  }

  h2 {
    text-align: center;
    padding-bottom: 4rem;
  }

  p {
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export default ServicesSection;
