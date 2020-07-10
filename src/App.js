import React, {Component} from 'react';

import './App.css';
import Aux from './hoc/Auxi'
import Header from './components/Header/Header'
import Bottom from './components/Footer/Footer'
import Body from './components/Body/Body'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'


class App extends Component {

  state = {
    sideDrawerOpen : false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render () {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop= <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <Aux>
        <div style={{height: '100%'}}>
        <Header clickDrawerButton= {this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Body/>
        <Bottom/>
        </div>
      </Aux>
    )
  }
}

export default App;
