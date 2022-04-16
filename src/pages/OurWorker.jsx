import React from "react";
import { Link } from "react-router-dom";
import atlthe from "../img/athlete-small.png";
import tracer from "../img/theracer-small.png";
import goodtime from "../img/goodtimes-small.png";
import styled from "styled-components";
import {
  pageAnimate,
  Tag,
  ImageTag,
  LineAnim,
  Slider,
  SliderLine,
} from "../Animate";
import { motion } from "framer-motion";

const OurWorker = () => {
  return (
    <Work exit="exit" variants={pageAnimate} initial="hidden" animate="show">
      <motion.div variants={SliderLine}>
        <Frame1 variants={Slider}></Frame1>
        <Frame2 variants={Slider}></Frame2>
        <Frame3 variants={Slider}></Frame3>
        <Frame4 variants={Slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={Tag}>The Athlet</motion.h2>
        <motion.div variants={LineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={ImageTag} src={atlthe} alt="athele" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={Tag}>The Racer</motion.h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <motion.img variants={ImageTag} src={tracer} alt="athele" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={Tag}>Good Times</motion.h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <motion.img variants={ImageTag} src={goodtime} alt="athele" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 5rem;
  overflow: hidden;
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .line {
    margin-bottom: 3rem;
    background-color: #5ee6cf;
    height: 0.3rem;
  }

  h2 {
    color: #5ee6cf;
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  z-index: 2;
  background-color: #eb1515;
  width: 100%;
  height: 100vh;
`;

const Frame2 = styled(Frame1)`
  background-color: #f12a2a;
`;

const Frame3 = styled(Frame1)`
  background-color: #0a5579;
`;

const Frame4 = styled(Frame1)`
  background-color: #1c79e2;
`;

export default OurWorker;
