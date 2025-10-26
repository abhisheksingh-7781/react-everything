import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mens = () => {
   const navigate=useNavigate()
  return (
    <div>
        <h1>Men's collaction</h1>
        <button onClick={()=>{navigate('/')}} className='bg-green-950 text-white px-2 py-1 rounded '>Go Back Home</button>
    </div>
  )
}

export default Mens