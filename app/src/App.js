import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
      <button>{props.label}</button>
  );
}

//Component 1: Asks user for their name and displays h1 with their name

function Welcome() {
  let name = prompt("What's your name?");
  return <h1>Hello, {name}</h1>;
}

//Component 2: Displays today is {day of week}

function Day() {
  let currentDate = new Date();
  let dayAsNum = currentDate.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return <h2>Today is {days[dayAsNum]}</h2>;
}

//Component 3: Displays a button that doesn't do anything

function Button() {
  return <button>Click</button>;
}

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
