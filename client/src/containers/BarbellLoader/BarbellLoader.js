import React, { Component } from 'react';
import Auxiliary from '../../HOC/Auxiliary';
import LoadedBarbell from '../../components/LoadedBarbell/LoadedBarbell';
import UserInput from '../../components/InputControl/UserInput/UserInput';

class BarbellLoader extends Component {
    
    state = {
        largeDiscs: {
            bigRed: 0,
            bigBlue: 0,
            bigYellow: 0,
            bigGreen: 0,
            bigWhite: 0,
            smallRed: 0
        },
        changeDiscs: {
            smallBlue: 0,
            smallYellow: 0,
            smallGreen: 0,
            smallWhite: 0,
        },
        barbellType: 'womens',
        barbellWeight: 15,
        totalWeight: 15,
        message: ''
    };

    // static getDerivedStateFromProps(props, state) {
    //     return state;
    // }
    // 
    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }
    // 
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     return null;
    // }

    // componentDidUpdate() {
    // }

    changeBarbellHandler = (event) => {
        var newBarbellWeight, newTotalWeight;
        if (event.target.name === 'mens') {
            newBarbellWeight = 20;
            if (this.state.totalWeight === 15) {
                newTotalWeight = 20;
            } else {
                newTotalWeight = this.state.totalWeight;
            }
        } else {
            newBarbellWeight = 15;
            if (this.state.totalWeight === 20) {
                newTotalWeight = 15;
            } else {
                newTotalWeight = this.state.totalWeight;
            }
        }
        this.setState({
            barbellType: event.target.name,
            barbellWeight: newBarbellWeight,
            totalWeight: newTotalWeight
        })
        
        this.barbellWeightUpdateHandler(newTotalWeight, newBarbellWeight);

    }

    barbellWeightUpdateHandler = (totalWeight, barbellWeight) => {

        const barAndCollarWeight = barbellWeight + 5;

        var largeRed = 0;
        var largeBlue = 0;
        var largeYellow = 0;
        var largeGreen = 0;
        var largeWhite = 0;
        var littleRed = 0;
        var littleBlue = 0;
        var littleYellow = 0;
        var littleGreen = 0;
        var littleWhite = 0;

        if (totalWeight > barAndCollarWeight) {
            var toBeLoaded = totalWeight - barAndCollarWeight;
           
            while (toBeLoaded > 0) {
                while (toBeLoaded >= 50) {
                    largeRed++;
                    toBeLoaded -= 50;
                }
                if (toBeLoaded >= 40) {
                    largeBlue++;
                    toBeLoaded -= 40;
                } else if (toBeLoaded >= 30) {
                    largeYellow++;
                    toBeLoaded -= 30;
                } else if (toBeLoaded >= 20) {
                    largeGreen++;
                    toBeLoaded -= 20;
                } else if (toBeLoaded >= 10) {
                    largeWhite++;
                    toBeLoaded -= 10;
                } else if (toBeLoaded >= 5) {
                    littleRed++;
                    toBeLoaded -= 5;
                } else if (toBeLoaded >= 4) {
                    littleBlue++;
                    toBeLoaded -= 4;
                } else if (toBeLoaded >= 3) {
                    littleYellow++;
                    toBeLoaded -= 3;
                } else if (toBeLoaded >= 2) {
                    littleGreen++;
                    toBeLoaded -= 2;
                } else if (toBeLoaded >= 1) {
                    littleWhite++;
                    toBeLoaded -= 1;
                };
            }
        }

        this.setState({
            largeDiscs: {
                bigRed: largeRed,
                bigBlue: largeBlue,
                bigYellow: largeYellow,
                bigGreen: largeGreen,
                bigWhite: largeWhite,
                smallRed: littleRed
            },
            changeDiscs: {
                smallBlue: littleBlue,
                smallYellow: littleYellow,
                smallGreen: littleGreen,
                smallWhite: littleWhite,
            }
        });
    }

    userInputChangeHandler = (event) => {
        var userInput = event.target.value;
        var newMessage;
        if (userInput <= (this.state.barbellWeight + 5)) {
            newMessage = "Please enter a weight greater than that of the barbell + competition collars (20kg total for women's bar or 25kg for men's bar)";
        } else if (userInput > 550) {
            newMessage = 'Please enter a realistic weight; this app caps at 550kg';
            userInput = 550;
        }
        this.setState({
            totalWeight: userInput,
            message: newMessage
        })
        this.barbellWeightUpdateHandler(userInput, this.state.barbellWeight);
    }
    
    render() {
        return (
            <Auxiliary>
                <UserInput
                    totalWeight={this.state.totalWeight}
                    changed={this.userInputChangeHandler}
                    clicked={this.changeBarbellHandler}
                    barbellType={this.state.barbellType}
                    message={this.state.message}/>
                <LoadedBarbell
                    type={this.state.barbellType}
                    largeDiscs={this.state.largeDiscs}
                    changeDiscs={this.state.changeDiscs} />
                <div id='totalWeight' value={this.state.totalWeight} />
                <div id='barbellWeight' value={this.state.barbellWeight} />
            </Auxiliary>
        )
    }
}

export default BarbellLoader;