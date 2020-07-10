import React, { Component } from 'react';
import classes from './Barbell.module.css';
import Auxiliary from '../../../HOC/Auxiliary';

class Barbell extends Component {
  render () {
    return (
      <Auxiliary>
        <div className={classes.Joint}></div>
        <div className={classes.Bar}></div>
        <div className={classes.Joint}></div>
      </Auxiliary>
    )
  }
}


export default Barbell;