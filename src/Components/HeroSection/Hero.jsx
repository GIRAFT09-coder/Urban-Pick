import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import hero_image1 from "../Assets/hero_image1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>New</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>Collections</p>
          <p>For everyone</p>
        </div>
        <div className="hero_latest_button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
