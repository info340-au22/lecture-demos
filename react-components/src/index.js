import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//create an element using JSX
// const titleMessage = "Hello World"
// const reactElem = <h1>{titleMessage.toUpperCase()}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);