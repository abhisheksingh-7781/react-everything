import React from 'react'

const Card = (props) => {
  return (
    <>
         <a href={props.dets.url} target='_blank'>
         <div className='h-44 w-47 overflow-hidden rounded-2xl '>   
          <img className='h-full w-full object-cover ' src={props.dets.download_url} alt="" />
        </div>
        <h2 className=' font-bold text-lg  '>{props.dets.author}</h2>
     </a>
    </>
  )
}

export default Card