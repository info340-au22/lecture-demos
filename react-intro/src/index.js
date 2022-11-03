import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

const message = ("Hello JSX");
const msgElem = <h1 className="my-class">{message.toUpperCase()+"!!"}</h1>;

const aString = "hello world";
 
const content = (
  <div>
    <h1 className="my-class">{message.toUpperCase()+"!!"}</h1>
    {/* a comment */}
    <div className="card">
      <div className="card-body">
        <p>I'm a card</p>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content);
