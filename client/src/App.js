import React from 'react';
import './App.css';
import BarbellLoader from './containers/BarbellLoader/BarbellLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>This React app displays a competition loaded barbell.</h2>
      </header>  
      
      <BarbellLoader/> 
      
    </div>
  );
}

export default App;
