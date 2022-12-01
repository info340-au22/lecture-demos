import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';

import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

import CHAT_HISTORY from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const [chatMessages, setChatMessages] = useState([]);

  const urlParamObj = useParams(); //get me the url parameters

  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]

  const currentUser = props.currentUser;
  const currentChannel = urlParamObj.channelName; //get channel name from url params


  useEffect(() => {

    const db = getDatabase();
    const messageRef = ref(db, "allMessages");

    //addEventListener("message value changed")
    onValue(messageRef, (snapshot) => {
      const changedValue = snapshot.val();
      console.log(changedValue); //is an object

      const objKeys = Object.keys(changedValue); //array of strings
      console.log(objKeys);

      const objArray = objKeys.map((keyString) => {
        const theObj = changedValue[keyString]; //get the object using brackets
        theObj.key = keyString;

        return theObj;
      })

      console.log(objArray);

      setChatMessages( objArray );

    })
  
  }, [])



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
    // setChatMessages(updateChatMessages); //update state and re-render

    //modify the database content
    const db = getDatabase();
    const allMessageRef = ref(db, "allMessages"); //where is the data I care about
    const profLastNameRef = ref(db, 
      "professor/lastName"
    )

    //          where       what
    firebasePush(allMessageRef, newMessage);

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