import React, {Component} from 'react';
import classes from './Collars.module.css';
import Auxiliary from '../../../HOC/Auxiliary';

class Collars extends Component {

  render() {
    
    if(this.props.side === 'right') {
      return (
        <Auxiliary>
          <div className={classes.CompCollarInside} />
          <div className={classes.CompCollarOutside} />
        </Auxiliary>
      )
    } else {
      return (
        <Auxiliary>
          <div className={classes.CompCollarOutside} />
          <div className={classes.CompCollarInside} />
        </Auxiliary>
      )
    }
  }
}


export default Collars;