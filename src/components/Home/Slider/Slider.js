import React, { Component } from "react";
import classes from "./Slider.module.scss";
import Carrusel1 from "./ImagesUrl/Carrusel1.jpeg";
import Carrusel2 from "./ImagesUrl/Carrusel2.jpeg";
import Carrusel3 from "./ImagesUrl/Carrusel3.jpeg";
import Carrusel4 from "./ImagesUrl/Carrusel4.jpeg";
import Carrusel5 from "./ImagesUrl/Carrusel5.jpeg";
import Carrusel6 from "./ImagesUrl/Carrusel6.jpeg";
import Auxi from '../../../hoc/Auxi'


class Slider extends Component {
  state = {
    x: 0,
    urlArr: [Carrusel3, Carrusel4, Carrusel6, Carrusel2, Carrusel5],
    urlProps: [Carrusel3, Carrusel4, Carrusel6, Carrusel2, Carrusel5],
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
          <img alt={`SliderImg${item.index}`} src={item} className={classes.Imgs} />
        </div>
      );
    });

    return (
      <Auxi >
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
      </Auxi>
    );
  }
}

export default Slider;
