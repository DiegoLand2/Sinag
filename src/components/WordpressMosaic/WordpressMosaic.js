import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./WordpressMosaic.module.scss";

import Lightbox from "../Lightbox/Lightbox";
import Auxi from "../../hoc/Auxi";

function WordpressMosaic() {
  const [productData, setProductData] = useState(null);
  const [mosaic, setMosaic] = useState(null);

  /*  useEffect(() => {
    axios.get(`http://localhost/wp-json/wp/v2/pages`).then((resp) => {
      console.log(resp.data);
      const productArray = resp.data.filter((page) => page.parent === 38);
      setProductData(productArray);
    });
  }, []); */

  useEffect(() => {
    axios.get(`http://localhost/wp-json/wp/v2/pages`).then((resp) => {
      console.log(resp.data);
      var productArray = resp.data.filter((page) => page.parent === 38);

      productArray = productArray.concat(productArray);
      productArray = productArray.concat(productArray);
      productArray = productArray.concat(productArray);
      productArray = productArray.concat(productArray);

      let mosaic = productArray.map((product, i) => {
        console.log(product);
        console.log(product.acf.product_imagen1);
        console.log(product.acf.product_title);
        return (
          <div key={i} className={classes.Imgs}>
            <img
              src={product.acf.product_image1}
              onClick={() => imgClicked(i)}
            />
          </div>
        );
      });

      setMosaic(mosaic);
    });
  }, []);

  const [showLightbox, setShowLightBox] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  let imgClicked = (index) => {
    setShowLightBox(true);
    setImageIndex(index);
  };

  const closeLightbox = () => {
    setShowLightBox(false);
  };

  return (
    <Auxi>
      <div className={classes.Mosaic}>{mosaic}</div>
      {/* {showLightbox ? (
          <Lightbox
            index={imageIndex}
            lightImgsArr={lightImgsArr}
            showLightbox={showLightbox}
            closeLightbox={() => closeLightbox()}
          />
        ) : null} */}
    </Auxi>
  );
}

export default WordpressMosaic;
