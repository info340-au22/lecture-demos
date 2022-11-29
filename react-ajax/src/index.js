import React from 'react';
import ReactDOM from 'react-dom/client';

import 'whatwg-fetch'; //loads the polyfill

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';


// const ableToSleepProm = askProfQuestion.then(writeSomeCode)
// ableToSleepProm.then(goToBed)






//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
