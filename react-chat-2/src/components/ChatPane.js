import React, { useState } from 'react';

export function ChatPane(props) {
  console.log("calling Chatpane");
  //     state variable    state setter function
  const [currentCount, setCurrentCount] = useState(340)
  console.log(currentCount); //what was it from RAM?

  const currentChannel = props.currentChannel;


  const handleClick = (event) => {
    console.log("you clicked me!");
    setCurrentCount(currentCount + 1);
    // addMessage("Click");
  }

  //only show current channel messages
  const channelMessages = props.chatMessages.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

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
    return null;
  }

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        {/* testing button */}
        {currentChannel == "general" &&
          <div>
            <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
              Click me: {currentCount}
            </button>
            <hr/>
          </div>
        }

        {/* messages */}
        {messageItemArray}
      </div>
    </div>
  )
}

function MessageItem(props) {
  const {userName, userImg, text} = props.messageData;
  
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (event) => {
    console.log("you liked "+userName+"'s post!");
    setIsLiked(!isLiked); //change the state variable in RAM
                      // RE-RENDERS THE COMPONENT
  }

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