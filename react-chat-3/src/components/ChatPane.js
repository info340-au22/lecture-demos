import React, { useState } from 'react';

export function ChatPane(props) {
  const currentChannel = props.currentChannel;
  const chatMessages = props.chatMessages;
  // console.log("rendering ChatPane"); //debugging

  //only show current channel messages
  //sorted in reverse order by timestamp
  const channelMessages = chatMessages
    .filter((msgObj) => {
      return msgObj.channel === currentChannel;
    })
    .sort((a,b) => b.timestamp - a.timestamp);

  const messageItemArray = channelMessages.map((messageObj) => {
    const element = (
      <MessageItem 
        messageData={messageObj} 
        key={messageObj.timestamp} 
      />
    )
    return element;
  })

  if(channelMessages.length === 0){
    return <p>No messages on this channel yet!</p>
  }

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        {messageItemArray}
      </div>
    </div>
  )
}

function MessageItem(props) {
  const {userName, userImg, text} = props.messageData;

  //state
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (event) => {
    console.log("you liked "+userName+"'s post!");
    setIsLiked(!isLiked); //toggle
  }

  //RENDERING
  let heartColor = "grey";
  if(isLiked) {
    heartColor = "red";
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
          <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}