import React, { useRef, useState } from "react";
// logo
import logo from "../../assets/logo.png";
import TopNav from "./TopNav";

const MainNav = ({ openBar, setOpenBar, openoScial, setOpenSocial }) => {
  return (
    <>
      <TopNav openoScial={openoScial} setOpenSocial={setOpenSocial} />
      <nav className="main-nav">
        <div className="container">
          <div className="list-group">
            <i
              onClick={() => setOpenBar(!openBar)}
              className="bars fas fa-bars"
            ></i>
            <a href="#" className="logo-link">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <i
              onClick={() => setOpenSocial(!openoScial)}
              className="dots-btn fas fa-ellipsis-v"
            ></i>
          </div>
          <ul
            style={openBar ? { left: 0 } : { left: "-100%" }}
            className="lists"
          >
            <i
              onClick={() => setOpenBar(!openBar)}
              className="exit fas fa-times"
            ></i>
            <li className="list-item" onClick={() => setOpenBar(!openBar)}>
              <a href="#">Home</a>
            </li>
            <li className="list-item" onClick={() => setOpenBar(!openBar)}>
              <a href="#about">About</a>
            </li>
            <li className="logo-item" onClick={() => setOpenBar(!openBar)}>
              <a href="#" className="logo-link">
                <img className="logo" src={logo} alt="logo" />
              </a>
            </li>
            <li className="list-item" onClick={() => setOpenBar(!openBar)}>
              <a href="#pricing">Service</a>
            </li>
            <li className="list-item" onClick={() => setOpenBar(!openBar)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
