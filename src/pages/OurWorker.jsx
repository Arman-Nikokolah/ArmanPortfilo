import React from "react";
import { BrowserRouter as Routes, Link } from "react-router-dom";
import atlthe from "../img/athlete-small.png";
import tracer from "../img/theracer-small.png";
import goodtime from "../img/goodtimes-small.png";
import styled from "styled-components";

const OurWorker = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlet</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={atlthe} alt="athele" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={tracer} alt="athele" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtime} alt="athele" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
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
    background-color: #cccccc;
    height: 0.2rem;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
  }
`;

export default OurWorker;
