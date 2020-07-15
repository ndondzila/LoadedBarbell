import React, { Component } from "react";
import classes from "./BarbellChooser.module.css";

const BarbellChooser = (props) => {
  let womensClasses, mensClasses;
  if (props.barbellType === 'womens') {
    womensClasses = 'btn btn-secondary active';
    mensClasses = 'btn btn-secondary';
  } else {
    womensClasses = 'btn btn-secondary';
    mensClasses = 'btn btn-secondary active';
  }
    return (
      <div className={classes.Centered}>
        <div>
          <label className={classes.InputLabel}>Barbell Type:</label>
        </div>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className={womensClasses}>
            <input type='radio' name='womens' id='womens' onClick={props.clicked}/>
            Women's
          </label>
          <label className={mensClasses}>
            <input type='radio' name='mens' id='mens' onClick={props.clicked}/>
            Men's
          </label>
        </div>
      </div>
    );
  };


export default BarbellChooser;
