import React from "react";

import classes from "./Toolbar.module.scss";
import Logo from "./LogoSinagV&D.png";
import Button from "../../UI/button/index";

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <div className={classes.primaryButtonMenu}>
      <Button
        icon="menuBars"
        color="black"
        size="medium"
        onClick={props.click}
      />
    </div>
    <a href="/" className={classes.Toolbar_Logo}>
      <img src={Logo} />
    </a>

    <div className={classes.secondaryButtonMenu}>
      <Button icon="search" color="black" size="medium" />
      <Button icon="heart" color="black" size="medium" />
    </div>
  </div>
);

export default toolbar;
