import React from "react";

import Slider from "./Slider/Slider";
import classes from "./Body.module.css";
import fotish from "./Fotish.jpeg";

const body = () => (
  <div className={classes.Body}>
    <Slider />
    <img src={fotish} className={classes.img} />
  </div>
);

export default body;
