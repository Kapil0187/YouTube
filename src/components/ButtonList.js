import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Cricket","News","Sports","Computer Programming" ,"Mutual Funds"]
const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((item)=><Button name={item}></Button>)
      }
    </div>
  )
}

export default ButtonList