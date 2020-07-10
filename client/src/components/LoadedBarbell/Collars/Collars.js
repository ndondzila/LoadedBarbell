import React, {Component} from 'react';
import classes from './Collars.module.css';

class Collars extends Component {

  render() {
    let endOfBar = null;
    switch (this.props.type) {
      case ('shortEnd'):
        endOfBar = <div className = {classes.ShortEnd}></div>
        break;
      default:
        endOfBar = null;
        break;
    }
    return (
      endOfBar
    )
  }
}


export default Collars;