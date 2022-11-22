import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import DEFAULT_USERS from '../data/users.json';

//A component!
export default function App(props) {
  //state
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //default to null user

  const loginUser = (userObj) => {
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj);
  }

  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <ChatPage currentUser={currentUser} />
      {/* <SignInPage currentUser={currentUser} loginCallback={loginUser} /> */}
      {/* <Static.WelcomePage /> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}

    </div>
  );
}