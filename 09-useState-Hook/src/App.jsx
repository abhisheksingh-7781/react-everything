import React, { useState } from 'react'

const App = () => {

   const [num, setnum] = useState(10)

 const btnClicked=()=>{
   const newNum={...num}

   setnum(prev=>({...prev,user:"alex",age:21}))
    
 }
  return (
    <div>
      <h1>{num.user} and age {num.age}</h1>
      <button className='bg-pink-500 p-2 rounded m-5' onClick={btnClicked}>click me</button>
    </div>
  )
}

export default App