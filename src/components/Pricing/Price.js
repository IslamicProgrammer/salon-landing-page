import React from "react";

const Price = ({ title, subtitle, price }) => {
  return (
    <div className="price">
      <div>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default Price;
