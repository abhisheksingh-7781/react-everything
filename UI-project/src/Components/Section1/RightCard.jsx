import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div  className='h-full w-80 overflow-hidden shrink-0 relative rounded-4xl  '>
      <img className='w-full h-full object-cover' src={props.img} alt="" />
     <RightCardContent id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard