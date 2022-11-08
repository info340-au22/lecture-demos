import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

//create an element using JSX
const reactElem = <h1>Hello React!</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactElem);