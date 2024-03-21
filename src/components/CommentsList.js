import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <div>
      {
        comments.map((comment,index)=>{
            return (
                <div key={index}>
                    <Comment data={comment}/>
                    <div className='pl-5 border border-l-black ml-5'>
                        <CommentsList comments={comment.replies}/>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default CommentsList
