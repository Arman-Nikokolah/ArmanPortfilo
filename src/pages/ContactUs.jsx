import React from "react";
import { motion } from "framer-motion";
import { pageAnimate, Tag } from "../Animate";
import styled from "styled-components";
import ScrollTop from "./../components/ScrollTop";
const ContactUs = () => {
  return (
    <ContactStyled
      exit="exit"
      variants={pageAnimate}
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "white" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={Tag}>Get In Touch</motion.h2>
        </Hide>

        <div>
          <Hide>
            <Social variants={Tag}>
              <Circle />
              <h2 variants={Tag}>Social Media Of Contact Us</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={Tag}>
              <Circle />
              <h2 variants={Tag}>Social Media Of Email Us</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={Tag}>
              <Circle />
              <h2 variants={Tag}>Social Media</h2>
            </Social>
          </Hide>
        </div>
      </Title>
      <ScrollTop />
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #353535;
  @media (max-width: 1300px) {
    padding: 2rem 1rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  margin: 2rem;
`;

export default ContactUs;
