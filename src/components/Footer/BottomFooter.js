import React from "react";

import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import logo from "../../assets/Footer/logo.png";

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <p>2020 All Rights Reserved Privacy Policy</p>
        </div>
        <ul className="icons">
          <li>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li className="twitter">
            <a href="#">
              <img src={twitter} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={google} alt="facebook" />
            </a>
          </li>
          <li className="hide">
            <a href="#">
              <img src={youtube} alt="facebook" />
            </a>
          </li>
          <li className="hide">
            <a href="#">
              <img src={pinterest} alt="facebook" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomFooter;
