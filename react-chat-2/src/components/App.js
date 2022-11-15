import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';

//A component!
export default function App(props) {

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
          <ChatPane currentChannel={currentChannel} />
          <ComposeForm />
        </div>
      </div>
    </div>
  );
}