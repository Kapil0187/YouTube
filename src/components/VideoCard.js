import React from 'react'

const VideoCard = ({info}) => {
    if(info===undefined)
        return;
    console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-72 h-76 shadow-lg'>
      <img 
        className='rounded-lg'
        alt='videoTumbnil' 
        src={thumbnails.medium.url}>
      </img>
      <ul>
        <li className='font-bold py-2'>{title.length<=30?(title):(title.substring(0,48)+"...")}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
