import React, { useState } from "react";
import styled from "styled-components";
import "../style/slider.css";

// data
import { sliderItems } from "../Data";

export default function Slider() {
  return (
    <div className="slider">
      <div className="slides">

        <input type="radio" name="radio-btn" id="radio1"></input>
        <input type="radio" name="radio-btn" id="radio2"></input>
        <input type="radio" name="radio-btn" id="radio3"></input>
        

        <div className="slide first">
            <img src={sliderItems[0].img} alt="image1" />
        </div>
        <div className="slide first">
            <img src={sliderItems[1].img} alt="image1" />
        </div>
        <div className="slide first">
            <img src={sliderItems[2].img} alt="image1" />
        </div>

        <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
        </div>

        <div className="navigation-manual">
            <lable for="radio1" className="manual-btn"></lable>
            <lable for="radio2" className="manual-btn"></lable>
            <lable for="radio3" className="manual-btn"></lable>
        </div>

         
      
      </div>
    </div>
  );
}
