import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoadedBarbell from './components/LoadedBarbell/LoadedBarbell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>This will be a React/Node.js application to display a competition loaded barbell.</h4>
      </header>

      <LoadedBarbell/>
      
    </div>
  );
}

export default App;
