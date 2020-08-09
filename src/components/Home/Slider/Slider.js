import React, {useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import img1 from "./ImagesUrl/Carrusel3.jpeg";
import img2 from "./ImagesUrl/Carrusel4.jpeg";
import img3 from "./ImagesUrl/Carrusel6.jpeg";
import img4 from "./ImagesUrl/Carrusel2.jpeg";
import img5 from "./ImagesUrl/Carrusel5.jpeg";




function Slider() {
  const [index, setIndex] = useState(0);


  const imgsArr = [
      {img: img1, alt:'First image', captionLabel: 'First slide label', captionMessage: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
      {img: img2, alt:'Second image', captionLabel: 'Second slide label', captionMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      {img: img3, alt:'Third image', captionLabel: 'Third slide label', captionMessage: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'},
      {img: img4, alt:'Fourth image', captionLabel: 'Fourth slide label', captionMessage: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'},
      {img: img5, alt:'Fifth image', captionLabel: 'Fifth slide label', captionMessage: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'}
  ]

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
  let carouselMap = imgsArr.map((item, index) => {
      return (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={item.img}
          alt={item.alt}
        />
        <Carousel.Caption>
          <h3>{item.captionLabel}</h3>
          <p>{item.captionMessage}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
  })

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000} wrap={true}>
      {carouselMap}
    </Carousel>
  );
}

//   render(<ControlledCarousel />);

export default Slider;