import React from "react";
import "./Banner.css";

const Banner = ({ text, img, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="banner"
    >
      {text ? (
        <h1>{text}</h1>
      ) : (
        <img className="team-badge" src={img} alt="logo" />
      )}

      <div className="bg-overlay"></div>
    </div>
  );
};

export default Banner;
