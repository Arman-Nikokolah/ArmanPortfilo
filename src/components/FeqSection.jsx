import React from "react";
import styled from "styled-components";
import { About } from "./../styles";

const FeqSection = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      {/* 1 */}
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            cupiditate.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      {/* 2 */}
      <div className="question">
        <h4>Daily Schedules?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            cupiditate.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      {/* 3 */}
      <div className="question">
        <h4>Diffrent Pyment Methods? </h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            cupiditate.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      {/* 4 */}
      <div className="question">
        <h4>What Product Do you Offer ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            cupiditate.
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    display: none;
    p {
      padding: 1rem 0rem;
    }
  }

  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    width: 100%;
  }
`;

export default FeqSection;
