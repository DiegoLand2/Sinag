import React from "react";

import classes from "./SideDrawer.module.scss";

const sideDrawer = (props) => {
  // let drawerClasses = `${classes.SideDrawer}`
  // if (props.show) {
  //     drawerClasses =  `${classes.SideDrawer} ${classes.open}`
  // }

  return (
    <nav className={`${classes.SideDrawer} ${props.show ? classes.open : ""}`}>
      {/* <nav className={drawerClasses}> */}
      <ul>
        <li className={classes.item}>
          <a className={classes.itemText} href="/">
            Quiénes somos
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.itemText} href="/">
            Tienda
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.itemText} href="/">
            Japamalas
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.itemText} href="/">
            Kokedamas
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.itemText} href="/">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
