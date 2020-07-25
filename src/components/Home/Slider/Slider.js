import React, { Component } from "react";
import classes from "./Slider.module.scss";
import img1 from "./ImagesUrl/Url1.jpeg";
import img2 from "./ImagesUrl/Url2.jpeg";
import img3 from "./ImagesUrl/Url3.jpeg";
import img4 from "./ImagesUrl/Url4.jpeg";

class Slider extends Component {
  state = {
    x: 0,
    urlArr: [img1, img2, img3, img4],
    urlProps: [img1, img2, img3, img4],
  };

  goLeft = () => {
    let newX = this.state.x + 100;

    this.setState({ x: newX });
  };

  goRight = () => {
    let newX = this.state.x - 100;

    let newStateArray = [...this.state.urlArr];

    if ((this.state.x + 200) % 400 === 0) {
      newStateArray = newStateArray.concat(this.state.urlProps);
    }

    if (this.state.x === -1900) {
      newX = 0;
    }

    if (this.state.x === -100) {
      newStateArray = this.state.urlProps;
    }

    this.setState({ x: newX, urlArr: newStateArray });
  };
  render() {
    let sliderMap = this.state.urlArr.map((item, index) => {
      return (
        <div
          key={index}
          className={classes.Slide}
          style={{ transform: `translateX(${this.state.x}%)` }}
        >
          <img src={item} className={classes.Imgs} />
        </div>
      );
    });

    return (
      <div className={classes.Slider}>
        {sliderMap}
        {this.state.x !== 0 ? (
          <button className={classes.GoLeft} onClick={this.goLeft}>
            <i className={classes.ArrowLeft}></i>
            <i className={classes.ArrowLeft}></i>
          </button>
        ) : null}

        {this.state.x !== 400 ? (
          <button className={classes.GoRight} onClick={this.goRight}>
            <i className={classes.ArrowRight}></i>
            <i className={classes.ArrowRight}></i>
          </button>
        ) : null}
      </div>
    );
  }
}

export default Slider;
