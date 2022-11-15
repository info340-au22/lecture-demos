import React from 'react';

import CHAT_HISTORY from '../data/chat_log.json';

export function ChatPane(props) {
  const currentChannel = props.currentChannel;

  const handleClick = (event) => {
    console.log("you clicked me!");
  }

  //only show current channel messages
  const channelMessage = CHAT_HISTORY.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

  const messageItemArray = channelMessage.map((messageObj) => {
    const element = (
      <MessageItem 
        messageData={messageObj} 
        key={messageObj.timestamp} 
      />
    )
    return element;
  })

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        {/* testing button */}
        <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
          Click me!
        </button>
        <hr/>

        {/* messages */}
        {messageItemArray}
      </div>
    </div>
  )
}

function MessageItem(props) {
  const {userName, userImg, text} = props.messageData;
  // const userName = props.messageData.userName;
  // const userImg = props.messageData.userImg;

  const handleClick = (event) => {
    console.log("you liked "+userName+"'s post!");
  }

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName+"'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}