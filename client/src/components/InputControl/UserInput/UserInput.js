import React from 'react'
import classes from './UserInput.module.css';
import BarbellChooser from '../BarbellChooser/BarbellChooser';

const UserInput = (props) => {
    
    return (
        
        <div className={classes.Inline}>
            <div className={classes.Centered}>
                <div><label className={classes.InputLabel}>How many KG would you like to see on the barbell?</label></div>
                <div><input
                    type='text'
                    value={props.totalWeight}
                    onChange={props.changed}
                    name="userInput" /></div>
                <div className={classes.WeightMessage}>{props.message}</div>
            </div>
            <BarbellChooser
                className={classes.Centered}
                clicked={props.clicked}
                barbellType={props.barbellType}/>
        </div>
    )
}

export default UserInput;