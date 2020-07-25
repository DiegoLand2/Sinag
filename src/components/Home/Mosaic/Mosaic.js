 import React, {useState, useEffect} from 'react'
 
 import classes from './Mosaic.module.scss'

 import Lightbox from '../../Lightbox/Lightbox'
 import Auxi from '../../../hoc/Auxi'

  import Rosario from './Images/Rosario.jpeg'
  import Atrapasueños from './Images/Atrapasueños.jpeg'
  import Bolsillo from './Images/Bolsillo.jpeg'
  import Cactus from './Images/Cactus.jpeg'
  import ColorImg from './Images/MosaicoDiademas.jpeg'
  import Collar from './Images/Collar.jpeg'
  import Kokedama from './Images/Kokedama.jpeg'
  import Paja from './Images/Paja.jpeg'
  import Pulceras from './Images/Pulceras.jpeg'
  import Rodillos from './Images/Rodillos.jpeg'
  import Zarcillos from './Images/Zarcillos.jpeg'

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
        {id: 2, url: [Rosario]},
        {id: 3, url: [Atrapasueños]},
        {id: 4, url: [Kokedama]},
        {id: 5, url: [Cactus]},
        {id: 6, url: [ColorImg]},
        {id: 7, url: [Collar]},
        {id: 8, url: [Bolsillo]},
        {id: 9, url: [Paja]},
        {id: 10, url: [Pulceras]},
        {id: 11, url: [Rodillos]},
        {id: 12, url: [Zarcillos]}
      ]

    const [showLightbox, setShowLightBox] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)


    let imgClicked = (index) => {
      setShowLightBox(true)
      setImageIndex(index)
    }

    const closeLightbox = () => {{
      setShowLightBox(false)
    }}     

    let mosaic = lightImgsArr.map((imag, i)=>{
      return (
        
          <div 
            key={i} 
            className={classes.Imgs}>
              <img 
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