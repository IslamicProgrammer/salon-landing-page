import React, { useEffect } from "react";
// images
import shape from "../../assets/shape.png";

import headerLaout from "../../assets/header-layaout.png";
import mobileLayout from "../../assets/header/mobile-png.png";

import AOS from "aos";

const HeaderSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <img src={shape} alt="shape" className="shape" />
        <div className="left" data-aos="fade-up">
          <div>
            <h1>
              <div>Be Different</div>
              <div>with Our Nail</div>
              <div>Design</div>
            </h1>
            <div className="line"></div>
            <a className="read-more" href="#">
              Read More
            </a>
            <p>
              Our qualified team provides a full range of nail design services
              to satisfy even the most demanding clients
            </p>
          </div>
        </div>
        <div className="right" data-aos="fade-down">
          <img className="layer" src={headerLaout} alt="layer" />
          <img className="layer2" src={mobileLayout} alt="layer" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
