import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { Tag, Tagp, ImageTag } from "../Animate";
import Wave from "./Wave";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={Tag}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={Tag}>
              your <span>dreams </span>come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={Tag}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={Tagp}>
          Contact us for any photography or vediography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <Link to="/contactus">
          <motion.button variants={Tagp}>Contact Us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={ImageTag} src={home1} alt="gay with has camera" />
      </Image>
      <Wave />
    </About>
  );
};

// styled components
export default AboutSection;
