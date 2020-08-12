import React, { useEffect } from "react";
// import Spinner from 'react-bootstrap/Spinner'

import Slider from "./Slider/Slider";
import classes from "./Home.module.scss";
import Piedras from "./Piedras.jpeg";
import Taller from "./Taller.jpeg";
import Mosaic from "./Mosaic/Mosaic";
import CenterImage from "./CenterImage/CenterImage";

const body = (props) => {
  useEffect(() => {
    axios.get(`https://sinaglife.com/API/wp-json/wp/v2/pages`).then((resp) => {
      console.log(resp, "HOSTING REQUEST");
    });
  }, []);
  console.log(resp, "HOSTING REQUEST will be tried");

  return (
    <div className={classes.Home}>
      <Slider />
      {/* <Spinner animation="border" variant="warning" /> */}
      <CenterImage />
      <img alt={"Taller"} src={Taller} className={classes.ImgSec3} />
      {/* <div className={classes.Sec2Text}>
      <p>La vida te da sorpresas, sorpresas te da la vida... R.B.</p>
    </div> */}

      <Mosaic
        clickMosaic={props.clickMosaic}
        showingBackdrop={props.showingBackdrop}
      />
      <div className={classes.ImgDiv}>
        <img alt={"Piedras"} src={Piedras} className={classes.ImgSec3} />
      </div>
    </div>
  );
};
export default body;
