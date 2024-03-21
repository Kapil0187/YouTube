import React from "react";

const Comment = ({data})=>{
    const {name,text,replies} = data;
    return(
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img 
            className="w-8"
            alt="user" 
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg">
        </img>
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
    )
}

export default Comment;