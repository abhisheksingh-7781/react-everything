import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  return (
    <div id='right' className=' h-full rounded-4xl overflow-x-auto w-2/3 p-5 flex flex-nowrap gap-10 '>   
       {props.users.map(function(dets,idx){
        return <RightCard key={idx} id={idx} img={dets.img} tag={dets.tag} />
       })}
    </div>
  )
}

export default RightContent