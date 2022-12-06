import React from 'react';

import { Navigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }

  const auth = getAuth();

  const uiConfigObj = {
    signInOptions: [ 
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, 
      { provider: GoogleAuthProvider.PROVIDER_ID }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
    credentialHelper: 'none'
  }



  //convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    if(userObj.userId === currentUser.userId){
      return null; //don't include!
    }
    return (
      <Dropdown.Item className="user-icon" key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
        {userObj.userName}
      </Dropdown.Item>
    )
  })

  //a bit hacky, doesn't totally
  if(currentUser.userId) { //if I'm signed in
    return <Navigate to="/chat/general" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">

        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />

        {/* <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  )
}