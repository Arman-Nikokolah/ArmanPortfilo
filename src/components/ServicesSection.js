import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import mony from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          Hi <span>quality</span>
          services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* 2 */}
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>teamwork </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* 3 */}
          <div className="card">
            <div className="icon">
              <img src={mony} alt="" />
              <h3>money </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          {/* 4 */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>diaphragm </h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
