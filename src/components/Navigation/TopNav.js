import React from "react";
// icons
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import pinterest from "../../assets/icons/pinterest.svg";
import cart from "../../assets/icons/cart.svg";

const TopNav = ({ openoScial, setOpenSocial }) => {
  return (
    <div
      style={openoScial ? { right: 0 } : { right: "-100%" }}
      className="top-nav"
    >
      <i
        onClick={() => setOpenSocial(!openoScial)}
        className="fas fa-times"
      ></i>
      <div className="container">
        <div className="first-description">
          <h4 className="call">
            Free Call: <span>(90) 9497987</span>
          </h4>
          <h4 className="opening">
            Opening Hours: <span>Mn-Fr: 10 am-8 pm</span>
          </h4>
        </div>
        <div className="last-description">
          <div className="lang">
            <h4 className="en">
              <a href="#">En</a>
            </h4>
            <h4 className="ru">
              <a href="#">Ru</a>
            </h4>
          </div>
          <ul className="social">
            <li>
              <a href="#">
                <img src={facebook} alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={google} alt="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="icon" />
              </a>
            </li>
            <li className="hidden">
              <a href="#">
                <img src={pinterest} alt="icon" />
              </a>
            </li>
            <li className="hidden">
              <a href="#">
                <img src={cart} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Task for me: icons hover effect

export default TopNav;
