import React from "react";
import styled from "styled-components";
import Toggel from "./Toggel";
import { About } from "./../styles";
import { AnimateSharedLayout } from "framer-motion";

const FeqSection = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      {/* 1 */}
      <AnimateSharedLayout>
        <Toggel title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              cupiditate.
            </p>
          </div>
        </Toggel>
        {/* 2 */}
        <Toggel title="Daily Schedules?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              cupiditate.
            </p>
          </div>
        </Toggel>

        {/* 3 */}
        <Toggel title="Diffrent Pyment Methods?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              cupiditate.
            </p>
          </div>
        </Toggel>
        {/* 4 */}
        <Toggel title="What Product Do you Offer ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              cupiditate.
            </p>
          </div>
        </Toggel>
      </AnimateSharedLayout>
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
