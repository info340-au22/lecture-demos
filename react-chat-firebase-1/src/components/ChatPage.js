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

    //addEventLister("databse value change")
    //returns the instructions how to turn it off
    const offFunction = onValue(allMessageRef, (snapshot) => {
      const valueObj = snapshot.val();
      console.log(valueObj);

      const objKeys = Object.keys(valueObj);
      console.log(objKeys);

      const objArray = objKeys.map((keyString) => {
        const theMessageObj = valueObj[keyString];
        theMessageObj.key = keyString;
        return theMessageObj;
      })
      console.log(objArray);

     setChatMessages(objArray); //needs to be an array
    })

    //when the component goes away, we turn off the listener

    //the useEffect callback returns...
    function cleanup() {
      console.log("component is being removed");
      console.log("turn out the lights");
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

    const updateChatMessages = [...chatMessages, newMessage];
    //setChatMessages(updateChatMessages); //update state and re-render

    //play with the database
    console.log("databasing");

    const db = getDatabase(); //"the database"
    const messageRef = ref(db, "exampleMessage");
    console.log(messageRef);

    const profLastNameRef = ref(db, 
        "professor/lastName"
    )

    //          where to change,
    //firebaseSet(messageRef, newMessage );

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