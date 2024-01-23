import React from "react";
import Amount from "./Amount";
import Total from "./Total";
import "./small.css";

const Small = ({ small }) => {
  return (
    <div>
      <div className="container">
        <div className="figures-container">
          <Amount />
          <Total />
        </div>
        <div className="btn-container">
          <button className="btn-reset">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Small;
