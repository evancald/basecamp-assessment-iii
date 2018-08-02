import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }
    render() {
        return <button>Click</button>;
    }
}

export default Button;