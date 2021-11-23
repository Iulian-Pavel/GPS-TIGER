import React from "react";
import { Slide } from "react-slideshow-image";
import "./slider.scss";
import firstImage from "./Slider_Images/slide1.jpg";
import secondImage from "./Slider_Images/slide2.jpg";
import thirdImage from "./Slider_Images/slide3.jpg";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Slide easing="ease" autoplay={true} arrows={false}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${firstImage})` }}>
            <h1 className="slider-header">GPSTIGER</h1>
            <p className="slider-paragraph">
              START TRACK & TRACE
              <br />
              VOOR SLECHTS <i class="fas fa-euro-sign"></i> 0.99 PER MAAND
            </p>
            <br />
            <br />
            <br />
            <button className="client-button">
              <i class="fas fa-angle-double-right"></i> KLANT WORDEN
            </button>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${secondImage})` }}>
          <h1 className="slider-header">GPSTIGER</h1>
            <p className="slider-paragraph">
              OOK WAR LAND OPHOUDT
              <br />
              GPS TRACKING <i class="fas fa-euro-sign"></i> VOOR 0.99 PER MAAND
            </p>
            <br />
            <br />
            <br />
            <button className="client-button">
              <i class="fas fa-angle-double-right"></i> KLANT WORDEN
            </button>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${thirdImage})` }}>
          <h1 className="slider-header">GPSTIGER</h1>
            <p className="slider-paragraph">
              GRIP OP UW WAGENPARK
              <br />
              FLEETMANAGEMENT <i class="fas fa-euro-sign"></i> 0.99 PER MAAND
            </p>
            <br />
            <br />
            <br />
            <button className="client-button">
              <i class="fas fa-angle-double-right"></i> KLANT WORDEN
            </button>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
