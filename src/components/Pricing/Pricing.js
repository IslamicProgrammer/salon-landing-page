import React, { useEffect } from "react";
import Price from "./Price";
// images
import bigLogo from "../../assets/big-logo.png";
import frame1 from "../../assets/Pricing/frame1.png";
import frame2 from "../../assets/Pricing/frame2.png";

import AOS from "aos";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="pricing" id="pricing">
      <img src={bigLogo} alt="bg" className="big-logo" />
      <img src={frame1} alt="frame" className="frame1" />
      <img src={frame2} alt="frame" className="frame2" />
      <div className="container">
        <div className="top">
          <h1>Special Pricing</h1>
          <p>
            We provide a wide variety of affordable nail and skin treatments for
            you.Below <br /> You can learn more abour the price range of our
            services.
          </p>
        </div>
        <div className="bottom">
          <div className="left" data-aos="fade-right">
            <Price
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-left"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-right"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-left"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-right"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
          </div>
          <div className="right" data-aos="fade-left">
            <Price
              data-aos="fade-right"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-left"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-right"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
            <Price
              data-aos="fade-left"
              title="Manicure"
              subtitle="60 - 100 Minute Sessions"
              price="$50.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
