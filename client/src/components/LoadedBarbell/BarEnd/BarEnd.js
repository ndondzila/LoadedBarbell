import React, { Component } from 'react';
import classes from './BarEnd.module.css';
import Collars from '../Collars/Collars';
import WeightDiscs from '../WeightDiscs/WeightDiscs';

class BarEnd extends Component {
  render () {
   
        let barEnd = null;
        switch (this.props.type) {
          case ('right'):
            barEnd = <div className = {classes.Inverted}>
                        <Collars type="shortEnd"/>
                        <WeightDiscs type="bigGreen" />
                        <WeightDiscs type="bigYellow" />
                        <WeightDiscs type="bigBlue" />
                        <WeightDiscs type="bigRed" />
                        </div>
            break;
          default:
            barEnd = <div>
                        <Collars type="shortEnd"/>
                        <WeightDiscs type="bigGreen" />
                        <WeightDiscs type="bigYellow" />
                        <WeightDiscs type="bigBlue" />
                        <WeightDiscs type="bigRed" />
                    </div>
            break;
        }
        return barEnd
  }
}


export default BarEnd;