import React from 'react';

export function ChannelList(props) {

  const currentChannel = props.currentChannel;

  const CHANNEL_LIST = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]

  const liArray = CHANNEL_LIST.map((channelNameString) => {

    let classList = "text-light";
    if(channelNameString === currentChannel) {
      classList = "text-dark bg-warning"
    }

    const element = <li key={channelNameString}><a className={classList} href="">{channelNameString}</a></li>;
    return element;
  })

  {/* const liArray = [
    <li>general</li>,
    <li>social</li>,
    <li>dank-memes</li>,
    <li>channel-4</li>
  ] */}

  return (
    <div className="text-light bg-secondary h-100">
      <ul>
        {liArray}
      </ul>
    </div>
  )
}