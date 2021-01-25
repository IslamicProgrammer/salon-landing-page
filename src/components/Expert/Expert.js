import React, { useEffect } from "react";
import expertImg from "../../assets/expert/expert.png";
import bigLogo from "../../assets/big-logo.png";
import frame from "../../assets/expert/frame.png";

import AOS from "aos";

const Expert = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="expert">
      <img src={bigLogo} alt="logo" className="big-logo" />
      <img className="frame" src={frame} alt="frame" />
      <div className="container">
        <a href="#" className="view">
          View all team
        </a>
        <div className="left" data-aos="zoom-out-right">
          <div className="card">
            <div className="card-header">
              <img src={expertImg} alt="expert" />
            </div>
            <div className="card-content">
              <h3>Mary Lucas</h3>
              <h4>Manicurist</h4>
              <a href="#">info@demolink</a>
            </div>
          </div>
        </div>
        <div className="right" data-aos="zoom-out-left">
          <div className="content">
            <h1>Meet Our Expert</h1>
            <p>
              We employ the best manicurists and pedicurists in the industry. We
              also educate our own award-winning specialists through constant
              training. Here are the most prominent talents of our team who make
              your dreams come true
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
