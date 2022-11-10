import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';

function App(props) {

  const currentChannel = "random";

  //what does the App look like?
  return (
    <div className="d-flex flex-column">
      <HeaderBar />
      <div className="row flex-grow-1">
        <div className="col-4">
          <ChannelList currentChannel={currentChannel} />
        </div>
        <div className="col">
          <ChatPane currentChannel={currentChannel} />
        </div>
      </div>
    </div>
  );
}

export default App;