import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime

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

  //run this function when the component first loads
  useEffect(() => {

    const db = getDatabase(); //"the database"
    const allMessageRef = ref(db, "allMessages");

    //when db value changes
    const offFunction = onValue(allMessageRef, (snapshot) => {
      const valueObj = snapshot.val();
      //convert object into array
      const objKeys = Object.keys(valueObj);
      const objArray = objKeys.map((keyString) => {
        const theMessageObj = valueObj[keyString];
        theMessageObj.key = keyString;
        return theMessageObj;
      })
      setChatMessages(objArray);
    })

    function cleanup() {
      console.log("component is being removed");
    //when the component goes away, we turn off the listener
    offFunction();
    }
    return cleanup; //return instructions on how to turn off lights
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

    const db = getDatabase(); //"the database"
    const allMessageRef = ref(db, 'allMessages');
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