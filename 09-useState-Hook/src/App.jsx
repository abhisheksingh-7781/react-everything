import React, { useState } from 'react'

const App = () => {
   const [count, setcount] = useState(0)
  return (
    <div>
         <h1 className=' p-3 bg-gray-800 text-white m-7 ml-10 p-3 rounded size-fit'>{count}</h1>
        <button className='px-2 py-3  bg-gray-500 rounded' onClick={()=>{setcount(count+1)}} >incress</button>
        <button className='px-2 py-3 m-5 bg-gray-500 rounded'onClick={()=>{setcount(count-1)}} >decress</button>
    </div>
  )
}

export default App