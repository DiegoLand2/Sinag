import React, {Component} from 'react';
import classes from './Slider.module.scss'
import img1 from './ImagesUrl/Url1.jpeg'
//import img2 from './ImagesUrl/Url2.jpeg'
import img3 from './ImagesUrl/Url3.jpeg'
//import img4 from './ImagesUrl/Url4.jpeg'

class Slider extends Component {
    
    state = {
        x : 0,
        urlArr: [img1,img3]
    }

    goLeft = () => {
        let newX = this.state.x + 100;
        (newX === 100) ? this.setState({x:-100*(this.state.urlArr.length - 1)}) : this.setState({x: newX});
    };

    goRight = () => {
        let newX = this.state.x - 100;
        (newX === -100*(this.state.urlArr.length)) ? this.setState({x:0}) : this.setState({x: newX});
    };

    render (){
        let sliderMap = this.state.urlArr.map(( item , index ) => {
            return (
                <div key={index} className={classes.Slide} style={{transform:`translateX(${this.state.x}%)`}}>
                    <img src={item} className={classes.Imgs}/>
                </div>
            )   
        });

        return (
            <div className={classes.Slider}>
                {sliderMap}
                <button className={classes.GoLeft} onClick={this.goLeft}>Left</button>
                <button className={classes.GoRight} onClick={this.goRight}>Right</button>
            </div>
        )
    }
}

export default Slider;