import React from 'react';

import CHAT_HISTORY from '../data/chat_log.json';

export function ChatPane(props) {
  const currentChannel = props.currentChannel;

  const channelMessage = CHAT_HISTORY.filter((msgObj) => {
    //if current channel, then keep
    return msgObj.channel === currentChannel;
  })

  const messageItemArray = channelMessage.map((messageObj) => {
    const element = <MessageItem messageData={messageObj} key={messageObj.timestamp} />
    return element;
  })

  return (
    <div className="pt-2">
      {messageItemArray}
        {/* <MessageItem messageData={CHAT_HISTORY[0]} newMessage={true} />
        <MessageItem messageData={CHAT_HISTORY[1]} />
        <MessageItem messageData={CHAT_HISTORY[2]} /> */}
    </div>
  )
}

function MessageItem(props) {
  // const userName = props.messageData.userName;
  // const userImg = props.messageData.userImg;
  const {userName, userImg, text} = props.messageData;

  //DOM
  //img = document.querySelector
  //img.addEventListener('click', (event) => {...})

  const handleClick = (event) => {
    console.log("you clicked on", userName);
  }

  return (
    <div className="message d-flex mb-2">
      <div className="me-2">
        <img 
          src={userImg} alt="Parrot's profile" 
          onClick={handleClick} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}