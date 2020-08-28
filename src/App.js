import React from 'react';
import logo from './logo.svg';
import './App.css';
import Svc from './Svc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Service demo1:
        </p>
        <Svc address={process.env.REACT_APP_DEMO1_ADDRESS}/>
      </header>
    </div>
  );
}

export default App;
