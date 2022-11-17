import React, { useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

//A component!
export default function App(props) {
  //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]
  const currentChannel = "general";

  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    } 

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }


  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
          <ComposeForm addMessageCallback={addMessage} />
        </div>
      </div>
    </div>
  );
}