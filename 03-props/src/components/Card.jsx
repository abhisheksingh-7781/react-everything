import React from 'react'

const Card = (props) => {
    
  return (
      <div className='card'>
            <img src={props.img} alt="" />
            <h2>{props.user } , {props.age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            <button>view profile</button>
        </div>
  )
}

export default Card