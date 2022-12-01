import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { initializeApp } from "firebase/app";

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvKwhPCQQd-PdnYr4cltvSysdl2SE_O9w",
  authDomain: "react-chat-au22.firebaseapp.com",
  projectId: "react-chat-au22",
  storageBucket: "react-chat-au22.appspot.com",
  messagingSenderId: "976313030243",
  appId: "1:976313030243:web:83a524fc5a9c4a3d2fca56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);