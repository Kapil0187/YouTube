import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import {generateName,randomMessage} from '../utils/Helper';
import { useState } from 'react';

const LiveChat = () => {

  const [liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector(store=>store.chat.messages)
  
    useEffect(()=>{
        const i = setInterval(()=>{
        // Api Polling
        console.log("API Polling");

        dispatch(addMessage({
            name:generateName(),
            message:randomMessage(20)
        }))
    },2000);

    return ()=> clearInterval(i);
  },[])
  return (
    <>
    <div className='flex ml-2 p-2 border border-black w-full h-[500px] bg-slate-100 rounded-lg overflow-y-hidden overflow-y-scroll flex-col-reverse'>
        <div>
            {
                chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message}/>)
            }
        </div>
    </div>
    <form 
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Kapil Barsker",
                message:liveMessage
            }))
            setLiveMessage("");
        }} 
        className='w-76 h-16 p-2 ml-2 border border-black'>
        <input type='text' className='p-2 border border-gray-400' value={liveMessage} 
            onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}>
        </input>
        <button className='px-2 mx-2 bg-blue-100'
         
        >Send</button>
    </form>
    </>
  )
}

export default LiveChat
