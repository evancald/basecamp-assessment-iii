import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
        }
    }
    render() {
        this.state.name = prompt("What's your name?");
        return <h1>Hello, {this.state.name}</h1>;
    }
}

export default Welcome;