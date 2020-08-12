import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./WordpressMosaic.module.scss";

import Lightbox from "../Lightbox/Lightbox";
import Auxi from "../../hoc/Auxi";

const WordpressMosaic = () => {
  const [productData, setProductData] = useState(null);

  const [lightImgsArr, setLightImgsArr] = useState([]);

  const [showLightbox, setShowLightBox] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/wp-json/wp/v2/pages`).then((resp) => {
      const productArray = resp.data.filter(
        (page) => page.parent === 38 && page.acf.product_showInMosaic
      );

      setProductData(productArray);
    });
  }, []);

  //// Hosting test ////
  useEffect(() => {
    axios.get(`https://sinaglife.com/API/wp-json/wp/v2/pages`).then((resp) => {
      console.log(resp, "HOSTING REQUEST");
    });
  }, []);

  const imgClicked = (index) => {
    const productACF = productData[index].acf;

    let lightboxUrls = [];

    for (let key in productACF) {
      if (key.includes("product_image") && productACF[key]) {
        lightboxUrls.push(productACF[key].url);
      }
    }

    setLightImgsArr(lightboxUrls);
    setShowLightBox(true);
  };

  const closeLightbox = () => {
    setShowLightBox(false);
  };

  return (
    <Auxi>
      <div className={classes.Mosaic}>
        {productData
          ? productData.map((product, i) => {
              return (
                <div key={i} className={classes.Imgs}>
                  <img
                    src={product.acf.product_image1.url}
                    onClick={() => imgClicked(i)}
                    alt={product.acf.product_image1.alt}
                  />
                </div>
              );
            })
          : null}
      </div>
      {showLightbox ? (
        <Lightbox
          lightImgsArr={lightImgsArr}
          showLightbox={showLightbox}
          closeLightbox={() => closeLightbox()}
        />
      ) : null}
    </Auxi>
  );
};

export default WordpressMosaic;
