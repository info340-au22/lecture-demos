import React from 'react';

import { Link } from 'react-router-dom';

export function ChannelList(props) {

  const channels = props.channels;
  const currentChannel = props.currentChannel;

  const linkElemArray = channels.map((channelNameString) => {

    //manually styling active instead of using NavLink
    let classList = "btn btn-sm btn-outline-light my-1";
    if(channelNameString === currentChannel) {
      classList = "btn btn-sm btn-warning my-1"
    }

    const element = (
      <div key={channelNameString}>
        <Link className={classList} to={"/chat/"+channelNameString}>{channelNameString}</Link>
      </div>
    )
    return element;
  })

  return (
    <nav className="text-light bg-secondary h-100 py-3 channel-nav px-2">
      {linkElemArray}
    </nav>
  )
}