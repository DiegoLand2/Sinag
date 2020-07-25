import React, {Component} from "react";

import Slider from "./Slider/Slider";
import classes from "./Home.module.scss";
import ColorImg from "./Japamala1.jpeg";
import Mosaic from "./Mosaic/Mosaic";

const body = (props) => (
  <div className={classes.Home}>
    <Slider />
    <div className={classes.Sec2Text}>
      {/* <img src={WhiteImg} className={classes.ImgSec2}/> */}
      <p>La vida te da sorpresas, sorpresas te da la vida... R.B.</p>
    </div>
    <Mosaic  clickMosaic={props.clickMosaic} showingBackdrop={props.showingBackdrop}/>
    <div className={classes.ImgDiv}>
      <img src={ColorImg} className={classes.ImgSec3} />
    </div>
  </div>
);

export default body;