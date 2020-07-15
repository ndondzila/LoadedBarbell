import React from 'react';
import classes from './Barbell.module.css';
import Auxiliary from '../../../HOC/Auxiliary';

const Barbell = (props) => {

  if (props.type === 'mens') {
    return (
      <Auxiliary>
        <div className={classes.Joint}></div>
        <div className={classes.BarOutsideKnurl}></div>
        <div className={classes.GripKnurl}></div>
        <div className={classes.BarInsideKnurl}></div>
        <div className={classes.CenterKnurl}></div>
        <div className={classes.BarInsideKnurl}></div>
        <div className={classes.GripKnurl}></div>
        <div className={classes.BarOutsideKnurl}></div>
        <div className={classes.Joint}></div>
      </Auxiliary>
    )
  } else {
    return (
      <Auxiliary>
        <div className={classes.WomensJoint}></div>
        <div className={classes.WomensBarOutsideKnurl}></div>
        <div className={classes.WomensGripKnurl}></div>
        <div className={classes.WomensBarInsideKnurl}></div>
        <div className={classes.WomensGripKnurl}></div>
        <div className={classes.WomensBarOutsideKnurl}></div>
        <div className={classes.WomensJoint}></div>
      </Auxiliary>
    )
    }
    
  }

export default Barbell;