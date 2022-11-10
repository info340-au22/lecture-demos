import React from 'react';

export function ChannelList(props) {

  const currentChannel = props.currentChannel;

  const CHANNELS_ARRAY = ['general', 'random', 'dank-memes', 'channel-4', 'pets'];

  const liArray = CHANNELS_ARRAY.map((channelNameString) => {
    let classList = "text-light";
    if(channelNameString === currentChannel){
      classList = "bg-warning text-dark"
    }

    const element = (
      <li key={channelNameString}>
        <a className={classList} href="">#{channelNameString}</a>
      </li>
    )
    return element;

  })

  return (
    <div className="bg-secondary text-light">
      <ul>
        {liArray}
     </ul>
    </div>
  )
}