import React from 'react'
import CommentsList from './CommentsList'

const commentsData = [
    {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[

        ]
    },
   {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[
            {
                name:"Kapil Barsekr",
                text:"Lorem ipsum dolar sit amet, consectetur adip",
                replies:[
                    {
                        name:"Kapil Barsekr",
                        text:"Lorem ipsum dolar sit amet, consectetur adip",
                        replies:[
                            {
                                name:"Kapil Barsekr",
                                text:"Lorem ipsum dolar sit amet, consectetur adip",
                                replies:[
                                    {
                                        name:"Kapil Barsekr",
                                        text:"Lorem ipsum dolar sit amet, consectetur adip",
                                        replies:[
                                            
                                        ]
                                    },
                                    {
                                        name:"Kapil Barsekr",
                                        text:"Lorem ipsum dolar sit amet, consectetur adip",
                                        replies:[
                                            
                                        ]
                                    },
                                ]
                            },
                            {
                                name:"Kapil Barsekr",
                                text:"Lorem ipsum dolar sit amet, consectetur adip",
                                replies:[
                                    
                                ]
                            },
                        ]
                    },
                    {
                        name:"Kapil Barsekr",
                        text:"Lorem ipsum dolar sit amet, consectetur adip",
                        replies:[
                            
                        ]
                    },
                ]
            },
            {
                name:"Kapil Barsekr",
                text:"Lorem ipsum dolar sit amet, consectetur adip",
                replies:[
                    
                ]
            },
            {
                name:"Kapil Barsekr",
                text:"Lorem ipsum dolar sit amet, consectetur adip",
                replies:[
                    
                ]
            },
        ]
    },
    {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[
            
        ]
    },
    {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[
            
        ]
    },
    {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[
            
        ]
    },
    {
        name:"Kapil Barsekr",
        text:"Lorem ipsum dolar sit amet, consectetur adip",
        replies:[
            
        ]
    },
]

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className='text-2xl font-bold'>Comment:</h1>
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  )
}

export default CommentContainer
