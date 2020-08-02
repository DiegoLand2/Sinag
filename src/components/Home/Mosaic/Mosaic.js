 import React, {useState} from 'react'
 
 import classes from './Mosaic.module.scss'

 import Lightbox from '../../Lightbox/Lightbox'
 import Auxi from '../../../hoc/Auxi'

  import Japamala1 from './Images/Japamala/Japamala1.jpeg'
  import Japamala2 from './Images/Japamala/Japamala2.jpeg'
  import Japamala3 from './Images/Japamala/Japamala3.jpeg'
  import Llavero1 from './Images/Llavero/Llavero1.jpeg'
  import Llavero2 from './Images/Llavero/Llavero2.jpeg'
  import Hombre1 from './Images/Hombre/Hombre1.jpeg'
  import Hombre2 from './Images/Hombre/Hombre2.jpeg'
  import Cactus1 from './Images/Cactus/Cactus1.jpeg'
  import Cactus2 from './Images/Cactus/Cactus2.jpeg'
  import Diadema1 from './Images/Diadema/Diadema1.jpeg'
  import Diadema2 from './Images/Diadema/Diadema2.jpeg'
  import Diadema3 from './Images/Diadema/Diadema3.jpeg'
  import Luna1 from './Images/Luna/Luna1.jpeg'
  import Luna2 from './Images/Luna/Luna2.jpeg'
  import Kokedama1 from './Images/Kokedama/Kokedama1.jpeg'
  import Kokedama2 from './Images/Kokedama/Kokedama2.jpeg'
  import Kokedama3 from './Images/Kokedama/Kokedama3.jpeg'
  import Bolso1 from './Images/Bolso/Bolso1.jpeg'
  import Bolso2 from './Images/Bolso/Bolso2.jpeg'
  import Buda1 from './Images/Buda/Buda1.jpeg'
  import Buda2 from './Images/Buda/Buda2.jpeg'
  import Buda3 from './Images/Buda/Buda3.jpeg'
  import Buda4 from './Images/Buda/Buda4.jpeg'
  import Rodillos1 from './Images/Rodillos/Rodillos1.jpeg'
  import Rodillos2 from './Images/Rodillos/Rodillos2.jpeg'
  import Anillos1 from './Images/Anillos/Anillos1.jpeg'
  import Anillos2 from './Images/Anillos/Anillos2.jpeg'
  import Anillos3 from './Images/Anillos/Anillos3.jpeg'
  import Anillos4 from './Images/Anillos/Anillos4.jpeg'

  import Cartera1 from './Images/Cartera/Cartera1.jpeg'
  import Cartera2 from './Images/Cartera/Cartera2.jpeg'
  import Cartera3 from './Images/Cartera/Cartera3.jpeg'
  import Cartera4 from './Images/Cartera/Cartera4.jpeg'
  import Cartera5 from './Images/Cartera/Cartera5.jpeg'
  import Cartera6 from './Images/Cartera/Cartera6.jpeg'
  import Cartera7 from './Images/Cartera/Cartera7.jpeg'
 

  const Mosaic = (props) => {

    const lightImgsArr = [
        {id: 1, url: [Cartera1, Cartera2, Cartera3, Cartera4, Cartera5, Cartera6, Cartera7]},
        {id: 2, url: [Japamala1, Japamala2, Japamala3]},
        {id: 3, url: [Llavero1, Llavero2]},
        {id: 4, url: [Kokedama1, Kokedama2, Kokedama3]},
        {id: 5, url: [Cactus1, Cactus2]},
        {id: 6, url: [Diadema1, Diadema3, Diadema2]},
        {id: 7, url: [Luna1, Luna2]},
        {id: 8, url: [Hombre1, Hombre2]},
        {id: 9, url: [Bolso1, Bolso2]},
        {id: 10, url: [Buda1, Buda2, Buda3, Buda4]},
        {id: 11, url: [Rodillos1, Rodillos2]},
        {id: 12, url: [Anillos1, Anillos2, Anillos3, Anillos4]}
      ]

    const [showLightbox, setShowLightBox] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)


    let imgClicked = (index) => {
      setShowLightBox(true)
      setImageIndex(index)
    }

    const closeLightbox = () => {
      setShowLightBox(false)
    }     

    let mosaic = lightImgsArr.map((imag, i)=>{
      return (
        
          <div 
            key={i} 
            className={classes.Imgs}>
              <img alt={`MosaicImg${imag.id}`}
                src={imag.url[0]} 
                onClick={() => imgClicked(i)}
              />
          </div>
      )
    });


    
    return (
      <Auxi>
        <div className={classes.Mosaic}>{mosaic}</div>
        {
        showLightbox ? <Lightbox index={imageIndex} lightImgsArr={lightImgsArr}  showLightbox={showLightbox} closeLightbox={() => closeLightbox()}/> : null
        }

      </Auxi>
    )

  };
    
export default Mosaic