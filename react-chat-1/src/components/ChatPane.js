import React from 'react';

import CHAT_HISTORY from '../data/chat_log.json'

export function ChatPane(props) {

  const currentChannel = props.currentChannel;

  const channelMessages = CHAT_HISTORY.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

  const msgElemArray = channelMessages.map((msgObj) => {
    const element = (
      <MessageItem 
        messageData={msgObj} 
        key={msgObj.timestamp}
      />
    )
    return element; //put into the new array
  });

  return (
    <div>
      {msgElemArray}
    </div>
  )
}

function MessageItem(props) {
  // const messageData = props.messageData;
  // const userName = messageData.userName; //Parrot
  // const userImg = messageData.userImg;
  // const text = messageData.text;

  const {userName, userImg, text} = props.messageData;

  const handleClick = function(event) {
    console.log("You clicked on " + userName);
  }

  return (
    <div className="message d-flex mb-2">
      <div className="me-2">
        <img onClick={handleClick} src={userImg} alt={userName+" avatar"} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p className="message-body">{text}</p>
      </div>
    </div>
  )
}

