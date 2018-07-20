import React, { Component } from 'react';

class Day extends Component {
    constructor() {
        super()
        this.state = {
            currentDate: new Date(),
        }
    }
    render() {
    let dayAsNum = this.state.currentDate.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return <h2>Today is {days[dayAsNum]}</h2>;
  }
}

export default Day;