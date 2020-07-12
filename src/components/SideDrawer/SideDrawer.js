import React from "react";

import classes from "./SideDrawer.module.scss";

import Button from "../UI/button/index";

const sideDrawer = (props) => {
  return (
    <nav className={`${classes.SideDrawer} ${props.show ? classes.open : ""}`}>
      <ul>
        <li className={classes.item}>
          <Button icon="store" color="white" size="big" />
          <div className={classes.TextBox}>
            <a className={classes.itemText} href="/">
              Tienda
            </a>
          </div>
        </li>
        <li className={classes.item}>
          <Button icon="ohm" color="white" size="big" />
          <div className={classes.TextBox}>
            <a className={classes.itemText} href="/">
              Japamalas
            </a>
          </div>
        </li>
        <li className={classes.item}>
          <Button icon="kokedama" color="white" size="big" />
          <div className={classes.TextBox}>
            <a className={classes.itemText} href="/">
              Kokedamas
            </a>
          </div>
        </li>
        <li className={classes.item}>
          <Button icon="blog" color="white" size="big" />
          <div className={classes.TextBox}>
            <a className={classes.itemText} href="/">
              Blog
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
