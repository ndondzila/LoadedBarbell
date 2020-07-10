import React from 'react';
import WeightDiscs from './WeightDiscs/WeightDiscs';
import Barbell from './Barbell/Barbell';
import classes from './LoadedBarbell.module.css';
import Collars from './Collars/Collars';
import BarEnd from './BarEnd/BarEnd';

const LoadedBarbell = ( props ) => {

  return (
    <div className={classes.LoadedBarbell}>
            <Collars type="shortEnd"/>
            <WeightDiscs type="bigGreen" />
            <WeightDiscs type="bigYellow" />
            <WeightDiscs type="bigBlue" />
            <WeightDiscs type="bigRed" />
            <Barbell />
            <WeightDiscs type="bigRed" />
            <WeightDiscs type="bigBlue" />
            <WeightDiscs type="bigYellow" />
            <WeightDiscs type="bigGreen" />
            <Collars type="shortEnd"/>
            
            
            
            
    </div>
  )

}


export default LoadedBarbell;