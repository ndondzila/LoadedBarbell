import React, { Component } from 'react';
import Auxiliary from '../../HOC/Auxiliary';
import LoadedBarbell from '../../components/LoadedBarbell/LoadedBarbell';

class BarbellLoader extends Component {

    render() {
        return (
            <Auxiliary>
                <div>User Input</div>
                <LoadedBarbell />
            </Auxiliary>
        )
    }
}

export default BarbellLoader;