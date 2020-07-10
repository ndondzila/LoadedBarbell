import React, { Component } from "react";
import Barbell from "./Barbell/Barbell";
import classes from "./LoadedBarbell.module.css";
import BarEnd from "./BarEnd/BarEnd";

class LoadedBarbell extends Component {
  state = {
    largeDiscs: {
      bigRed: 3,
      bigBlue: 0,
      bigYellow: 0,
      bigGreen: 0,
      bigWhite: 0,
      smallRed: 0
    },
    changeDiscs: {
      smallBlue: 0,
      smallYellow: 0,
      smallGreen: 0,
      smallWhite: 0,
    },
  };
  render() {
    return (
      <div className={classes.LoadedBarbell}>
        <BarEnd
          largeDiscs={this.state.largeDiscs}
          changeDiscs={this.state.changeDiscs}
        />
        <Barbell />
        <BarEnd
          type='right'
          largeDiscs={this.state.largeDiscs}
          changeDiscs={this.state.changeDiscs}
        />
      </div>
    );
  }
}

export default LoadedBarbell;
