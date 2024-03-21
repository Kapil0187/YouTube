import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Cricket","News","Sports","Computer Programming" ,"Mutual Funds"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((item,index)=><Button key={index} name={item}></Button>)
      }
    </div>
  )
}

export default ButtonList
