import React from 'react';

export function ChannelList(props) {

  const channels = props.channels;
  const currentChannel = props.currentChannel;

  const linkElemArray = channels.map((channelNameString) => {

    let classList = "btn btn-outline-light my-1";
    if(channelNameString === currentChannel) {
      classList = "btn btn-warning"
    }

    const element = (
      <div key={channelNameString}>
        <button className={classList} href="">{channelNameString}</button>
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