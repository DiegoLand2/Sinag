import React from 'react';

import classes from './Toolbar.module.scss'
import DrawerToggleButton from '../../SideDrawer/DrawerToggleButton'
import Logo from './LogoSinagV&D.png'

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <DrawerToggleButton click={props.click}/>
        <a href='/' className={classes.Toolbar_Logo}><img src={Logo}/></a>
        <div>★ ❤ ♫</div>
    </div>
)

export default toolbar;