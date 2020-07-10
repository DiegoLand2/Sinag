import React from "react";

import Slider from "./Slider/Slider";
import classes from "./Body.module.css";
import WhiteImg from "./IMGSec2.png";
import ColorImg from "./IMGSec3.png";

const body = () => (
  <div className={classes.Body}>
    <Slider />
   <img src={WhiteImg} className={classes.ImgSec2} />
    <img src={ColorImg} className={classes.ImgSec3} />
  </div>
);

export default body;
