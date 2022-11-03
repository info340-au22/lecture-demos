import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

const message = "I am inline!";

// const msgElem = <h1 className="myclass">Hello React</h1>;

const divClass = "card";

const content = (
  <main>
    {/* a comment */}
    <div className={divClass}>
      <h1>{message.toUpperCase()+"!!"}</h1>
    </div>
  </main>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content);