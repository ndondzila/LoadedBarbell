import React from "react";
import Barbell from "./Barbell/Barbell";
import classes from "./LoadedBarbell.module.css";
import BarEnd from "./BarEnd/BarEnd";

const LoadedBarbell = (props) => {
  
    return (
      <div className={classes.LoadedBarbell}>
        <BarEnd
          largeDiscs={props.largeDiscs}
          changeDiscs={props.changeDiscs}
        />
        <Barbell
          type={props.type}
          className={classes.Barbell}
        />
        <BarEnd
          type='right'
          largeDiscs={props.largeDiscs}
          changeDiscs={props.changeDiscs}
        />
      </div>
  );
  
}

export default LoadedBarbell;
