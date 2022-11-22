import React, { useState } from 'react';

import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);

  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]

  const currentUser = props.currentUser;
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

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }

  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelList channels={channelList} currentChannel={currentChannel} />
      </div>
      <div className="col d-flex flex-column">
        <ChatPane chatMessages={chatMessages} currentChannel={currentChannel} />
        <ComposeForm currentUser={currentUser} addMessageCallback={addMessage} />
      </div>
    </div>
  )



}