import React from 'react';
import classes from './BarTip.module.css';

const BarTip = (props) => {

    let barTip = null;
    switch (props.type) {
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

export default BarTip;