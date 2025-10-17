import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10)

  const btnClicked=()=>{

        // setnum(num+1)
        // setnum(num+1)   This is not work this is updating only 1 value
        // setnum(num+1)

       setnum(prev=>prev+1)
       setnum(prev=>prev+1)  // This is called batch updating
       setnum(prev=>prev+1)  

  }


  return (
    <div>
      <h1>{num}</h1>
      <button className='bg-pink-500 m-5 p-2 rounded ' onClick={btnClicked}>click me </button>
    </div>
  )
}

export default App