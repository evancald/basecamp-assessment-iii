import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './Day.js';
import Welcome from './Welcome.js';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Welcome />
          <Day />
          <Button />
      </div>
    );
  }
}

export default App;
