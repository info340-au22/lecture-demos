import React from 'react';

import { Link, NavLink } from 'react-router-dom';

export function HeaderBar(props) {
  const currentUser = props.currentUser;

  const handleSignOut = (event) => {
    console.log("signing out");
  }  
  
  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        {currentUser.userId && 
          <>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">Profile</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        }
        {!currentUser.userId &&
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </NavLink>
          </li>
        }
      </ul>

    </header>
  )
}