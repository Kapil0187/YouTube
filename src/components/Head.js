import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { toggleMenue } from '../utils/appSlice'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
    const dispatch = useDispatch();
    const [searchQuerey,setSearchQuery] = useState("");
    const [suggestions,setSuggestons] = useState([]);
    const [showSuggestions,setShowSuggestion] = useState(true);

    const searchCache = useSelector((store)=>store.search);

    useEffect(()=>{
       const timer = setTimeout(()=>
       {
            if(searchCache[searchQuerey]){
                setSuggestons(searchCache[searchQuerey]);
            }
            else{
                getSearchSagetions()
            }
       },200)

       return ()=>{
        clearTimeout(timer);
       }
    },[searchQuerey])

    const getSearchSagetions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuerey);
        const result = await data.json();
        console.log(result[1]);
        setSuggestons(result[1]);
        dispatch(cacheResults({[searchQuerey]:result[1]}));
    }
    const toggleMenueHandler = ()=>{
        dispatch(toggleMenue());
    };
  
  return (
    <div className='flex p-5 m-2 shadow-lg justify-between'>
        <div className='flex w-2/12'>
            <img 
                onClick={()=>toggleMenueHandler()}
                className='h-8 cursor-pointer'
                alt='menu' 
                src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'>
            </img>
            
                <img 
                    className='h-8 mx-2'
                    alt='youtube-log' 
                    src='https://t4.ftcdn.net/jpg/04/76/41/47/240_F_476414785_Qsbkvlr4AK0lvuKjSDlb7lfOY5oqwimn.jpg'>
                </img>
           
        </div>
        <div className= "w-6/12">
            <div>
                <input 
                    className="w-10/12 p-2 border border-gray-400 rounded-l-full" 
                    type='text'
                    value={searchQuerey}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestion(true)}
                    onBlur={()=>setShowSuggestion(false)}
                    >
                </input>
                <button className='p-2 border border-gray-400  bg-gray-100 rounded-r-full'>Search</button>
            </div>
            {showSuggestions && <div className='absolute bg-white rounded-lg w-[31rem] p-2 bg-gray-100 shadow-lg'>
                <ul>
                    {
                     suggestions.map((s)=><li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)
                    }
                </ul>
            </div>}
        </div>
        <div className='w-1/12 text-right'>
            <img className='h-8' alt="user" src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg'></img>
        </div>
    </div>
  )
}

export default Head
