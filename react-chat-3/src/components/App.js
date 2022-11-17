import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import Button from 'react-bootstrap/Button';


import CHAT_HISTORY from '../data/chat_log.json';

//A component!
export default function App(props) {
  console.log("rendring App");

  //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  const [currentUser, setCurrentUser] = useState({userId: null, userName: null, userImg: '/img/null.png'});


  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]
  const currentChannel = "general";
  
  const addMessage = (messageText) => {
    const userObj = currentUser;
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": currentChannel
    } 

    const updatedChatMessages = [...chatMessages, newMessage];
    setChatMessages(updatedChatMessages); //update state and re-render
  }

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
  }

  const handleClick = (event) => {
    // console.log("test")
    addMessage(
      {userId:"test", userName: "text", imgImg:""},
      "Test",
      "general"
    )
  }


  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginCallback={loginUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          {/* <div>
            <Button variant="secondary" onClick={handleClick}>Test</Button>
          </div> */}

          <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
          <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
        </div>
      </div>
    </div>
  );
}