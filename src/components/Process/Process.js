import React, { useEffect } from "react";
import leftBg from "../../assets/process/left-img.png";
import bigLogo from "../../assets/big-logo.png";
import mobileLogo from "../../assets/process/mobile.png";

import AOS from "aos";

const Proccess = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="proccess">
      <img src={bigLogo} alt="big-logo" className="big-logo" />
      <img src={mobileLogo} alt="mobile-logo" className="mobile-logo" />
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <img src={leftBg} alt="photo" />
        </div>

        <div className="right" data-aos="zoom-in">
          <div className="typo">
            <h3>Sterilization Process</h3>
            <p>
              Instruments are sterilized after each customer. Sterilization
              process: Instruments are placed in a disinfectant solution
              (Barbicide) on a daily basis for 10-20 minutes, rinsed with water,
              dried and put in an individual bag sealed with a sticker
              indicator. Thereafter, this bag is placed in a dry heat oven for
              60 minutes @180 degrees celsius
            </p>
          </div>
          <div className="typo">
            <h3>Guarantee</h3>
            <p>
              We choose only top quality and most advance brands from Russia,
              Japan and Germany. We stand behind our work and products.
              Nevertheless, if something happens to the coverage within 5 days
              of service please let us know and we will fix it asap. We are
              looking for 100% satisfaction!!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proccess;
