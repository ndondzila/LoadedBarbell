import React, {Component} from 'react';
import classes from './BarTip.module.css';

class BarTip extends Component {

  render() {
    let barTip = null;
    switch (this.props.type) {
      case ('shortEnd'):
        barTip = <div className = {classes.ShortEnd}></div>
        break;
      case ('mediumEnd'):
        barTip = <div className = {classes.MediumEnd}></div>
        break;
      case ('longEnd'):
        barTip = <div className = {classes.LongEnd}></div>
        break;
      case ('empty'):
        barTip = <div className = {classes.Empty}></div>
        break;
      default:
        barTip = null;
        break;
    }
    
    return barTip;
  }
}


export default BarTip;