import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container row">
        <div className="col-8">
          <div className="banner-text">
          <h3>I'm a professional Pathologist.</h3>
          <p>I have 5 years of experience.</p>
          <button className="btn btn-dark">Explore</button>
          </div>
        </div>
        <div className="col-4">

        </div>
      </div>
    </div>
  );
};

export default Banner;
