import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const name = 'Evan';
const element = <h1>{name} has taken control</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
