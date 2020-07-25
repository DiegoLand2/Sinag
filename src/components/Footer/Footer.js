import React from "react";
import { Link } from "@reach/router";

import classes from "./Footer.module.scss";
import Button from "../UI/button/index";

const bottom = () => (
  <footer className={classes.Bottom}>
    <div className={classes.FooterSection1}>
      <p className={classes.FooterTitle}>Menú</p>
      <Link to='Tienda' className={classes.Text}><nav>Tienda</nav></Link>
      <Link to='Japamalas' className={classes.Text}><nav>Japamalas</nav></Link>
      <Link to='Kokedamas' className={classes.Text}><nav>Kokedamas</nav></Link>
      <Link to='Blog' className={classes.Text}><nav>Blog</nav></Link>
     
    </div>
    <div className={classes.FooterSection2}>
      <p className={classes.FooterTitle}>Sinag</p>

      <nav>Quiénes Somos</nav>
      <nav>Tramitación de Envíos</nav>
      <nav>Política de Devoluciones</nav>
    </div>
    <div className={classes.FooterSection3}>
      <p className={classes.FooterTitle}>Contáctanos</p>

      <nav className={classes.IconWithText}>
        <Button className={classes.Whatsapp}
          icon="whatsapp"
          color="black"
          size="medium"
          padding="noPadding"
        />
        +34 690484893
      </nav>
      <nav className={classes.IconWithText}>
        <Button icon="mail" color="black" size="medium" padding="noPadding" />
        sinagvive@gmail.com
      </nav>

      <nav className={classes.IconWithText}>
        <Button
          icon="facebooks"
          color="black"
          size="medium"
          padding="noPadding"
        />
        <Button icon="insta" color="black" size="medium" padding="noPadding" />
        <Button icon="twit" color="black" size="medium" padding="noPadding" />
      </nav>
    </div>
  </footer>
);

export default bottom;
