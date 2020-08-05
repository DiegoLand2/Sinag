import React from "react";

import Slider from "./Slider/Slider";
import classes from "./Home.module.scss";
import Piedras from "./Piedras.jpeg";
import Taller from "./Taller.jpeg";
import Mosaic from "./Mosaic/Mosaic";

const body = (props) => (
  <div className={classes.Home}>
    <Slider />
    <div className={classes.phraseDiv}>
      <div className={classes.phraseBox}>
      <p>Inspirados en crear desde el alma.</p>
      </div>
    </div>
    <img alt={'Taller'} src={Taller} className={classes.ImgSec3} />
    {/* <div className={classes.Sec2Text}>
      <p>La vida te da sorpresas, sorpresas te da la vida... R.B.</p>
    </div> */}
    <Mosaic  clickMosaic={props.clickMosaic} showingBackdrop={props.showingBackdrop}/>
    <div className={classes.ImgDiv}>
      <img alt={'Piedras'} src={Piedras} className={classes.ImgSec3} />
    </div>
  </div>
);

export default body;