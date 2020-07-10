import React, {Component} from 'react';
import classes from './WeightDiscs.module.css';

class WeightDiscs extends Component {

  render() {
    let disc = null;
    switch (this.props.type) {
      case ('bigRed'):
        disc = <div className = {classes.BigRed}></div>
        break;
      case ('bigBlue'):
        disc = <div className = {classes.BigBlue}></div>
        break;
      case ('bigYellow'):
        disc = <div className = {classes.BigYellow}></div>
        break;
      case ('bigGreen'):
        disc = <div className = {classes.BigGreen}></div>
        break;
      case ('bigWhite'):
        disc = <div className = {classes.BigWhite}></div>
        break;
      case ('smallRed'):
        disc = <div className = {classes.SmallRed}></div>
        break;
      case ('smallBlue'):
        disc = <div className = {classes.SmallBlue}></div>
        break;
      case ('smallYellow'):
        disc = <div className = {classes.SmallYellow}></div>
        break;
      case ('smallGreen'):
        disc = <div className = {classes.SmallGreen}></div>
        break;
      case ('smallWhite'):
        disc = <div className = {classes.SmallWhite}></div>
        break;
      default:
        disc = null;
        break;
    }
    return (
      disc
    )
  }
}


export default WeightDiscs;