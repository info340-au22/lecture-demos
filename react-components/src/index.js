import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.js';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const titleMsg = "Hello Inline";
// const imgPath = "img/joelross-200x.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);