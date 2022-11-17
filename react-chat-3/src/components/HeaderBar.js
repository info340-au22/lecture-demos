import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USERS = [
  {userId: null, userName: null, userImg: '/img/null.png'}, //null user
  {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
  {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
  {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},  
]

export function HeaderBar(props) {

  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    console.log(selectedUserObj);
    loginFunction(selectedUserObj);
    //do something with userObj!
  }

  //convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {

    if(userObj.userId === currentUser.userId){
      return null;
    }

    let classList = "btn user-icon"
    // if(userObj.userId === currentUser.userId){
    //   classList = "btn user-icon highlighted"
    // }

    return (
      <Dropdown.Item className={classList} key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} /> {userObj.userName}
      </Dropdown.Item>
    )
  })


  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {userButtons}
        </Dropdown.Menu>
      </Dropdown>
    </header>
  )
}