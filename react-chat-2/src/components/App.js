import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

//A component!
export default function App(props) {

  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

  const addMessage = (text) => {
    const newMessage = {
      "userId": "penguin",
      "userName": "Penguin",
      "userImg": "/img/Penguin.png",
      "text": text,
      "timestamp": Date.now(),
      "channel": "general"
    } 

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }


  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]
  const currentChannel = "general";

  //what content should my App look like?
  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channels={channelList} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane 
            currentChannel={currentChannel} 
            chatMessages={chatMessages}
            />
          <ComposeForm addMessageCallback={addMessage} />
        </div>
      </div>
    </div>
  );
}