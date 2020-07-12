import React from "react";

import Slider from "./Slider/Slider";
import classes from "./Body.module.scss";
import WhiteImg from "./IMGSec2.png";
import ColorImg from "./IMGSec3.png";

const body = () => (
  <div className={classes.Body}>
    <Slider />
    <div className={classes.Sec2Text}>
      {/* <img src={WhiteImg} className={classes.ImgSec2}/> */}
      <p>La vida te da sorpresas, sorpresas te da la vida... G.S.</p>
    </div>
    <div className={classes.ImgDiv}>
      <img src={ColorImg} className={classes.ImgSec3} />
    </div>
  </div>
);

export default body;
