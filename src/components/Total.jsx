import React from "react";
import "./amount.css";

const Total = ({ total }) => {
  return (
    <div className="tip">
      <div className="left">
        <h2>Total</h2>
        <p>/ person</p>
      </div>
      <div className="right">$0.00</div>
    </div>
  );
};

export default Total;
