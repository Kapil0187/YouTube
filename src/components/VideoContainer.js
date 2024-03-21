import React, { useEffect,useState} from 'react'
import VideoCard from './VideoCard';
import {YOUTUBE_API_URL} from "../utils/constants"
import { Link } from 'react-router-dom';
import Simmer from './Simmer';
const VideoContainer = () => {

  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  }
  if(videos.length===0)
    return <Simmer/>
  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video)=>
        <Link key={video.id} to={"/watch?v="+video.id}>
          <VideoCard info={video}/>
        </Link>)
      }
    </div>
  )
}

export default VideoContainer
