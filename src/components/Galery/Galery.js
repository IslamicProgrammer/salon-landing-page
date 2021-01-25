import React, { useEffect } from "react";
// images
import vector from "../../assets/galery/Vector.png";

import AOS from "aos";

const Galery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="galery" data-aos="zoom-out-down">
      <h2 className="title">Galery of our work</h2>
      <img className="vector" src={vector} alt="vector" />
      <div class="grid-container">
        <div class="item grid-item little1"></div>
        <div class="item2 grid-item little1"></div>
        <div class="item3 grid-item big"></div>
        <div class="item4 grid-item little2"></div>
        <div class="item5 grid-item little2"></div>
        <div class="item6 grid-item big"></div>
        <div class="item8 grid-item little1"></div>
        <div class="item7 grid-item little1"></div>
        <div class="item9 grid-item big"></div>
        <div class="item10 grid-item big"></div>
        <div class="item11 grid-item big"></div>
        <div class="item12 grid-item big"></div>
      </div>
    </div>
  );
};

export default Galery;
