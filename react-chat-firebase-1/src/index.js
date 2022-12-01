import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

const firebaseConfig = {
  apiKey: "AIzaSyAiAU7l9A2YOpkh2onDi4fq9LaYzj2Hlpo",
  authDomain: "react-chat-au22-b.firebaseapp.com",
  projectId: "react-chat-au22-b",
  storageBucket: "react-chat-au22-b.appspot.com",
  messagingSenderId: "394421526536",
  appId: "1:394421526536:web:7bad5c101a433ce83e31bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);