import React from "react";
import BottomFooter from "./BottomFooter";
// images
import footer1 from "../../assets/Footer/icon1.svg";
import footer2 from "../../assets/Footer/icon2.svg";
import footer3 from "../../assets/Footer/icon3.svg";

const TopFooter = () => {
  return (
    <>
      <div className="top-footer">
        <div className="container">
          <div className="item">
            <h3>About</h3>
            <span></span>
            <p>
              Allamaroza Nail Salon has been offering an extensive range of nail
              services and skin treatments since 1999
            </p>
          </div>
          <div className="item">
            <h3>Recent Photos</h3>
            <span></span>
            <h4>
              Top 5 Reasons to Visit the Nearest Nail Salon
              <p>June 10, 2018 / 3 Comments</p>
            </h4>
            <h4>
              One Day from the Life of a Nail Artist
              <p>June 12, 2018 / 3 Comments</p>
            </h4>
          </div>
          <div className="item">
            <h3>Opening Hours</h3>
            <span></span>
            <p>
              Mon-Fri: 9 am - 6 pm <br /> Saturday: 9 am - 4 pm <br /> Sunday:
              Closed
            </p>
          </div>
          <div className="item">
            <h3>Contact</h3>
            <span></span>
            <div className="loc">
              <img src={footer1} alt="icon" />
              <h4>Washington, USA Richmon Street</h4>
            </div>
            <div className="loc">
              <img src={footer2} alt="icon" />
              <h4>(90) 9497987</h4>
            </div>
            <div className="loc">
              <img src={footer3} alt="icon" />
              <h4>info@demolink.org</h4>
            </div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </>
  );
};

export default TopFooter;
