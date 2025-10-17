import React, { useState } from 'react'

const App = () => {
    const [title, setTitle] = useState("")
    
    
  return (
    <div className=' m-5'>
        <form onSubmit={(e)=>{ e.preventDefault() ,setTitle("") }} >
           <input type="text" 
           value={title}
           onChange={(e)=>{setTitle(e.target.value)}}
           placeholder='Enter you somthing' 
           />
 <br />
           <button onClick={()=>{console.log("form submit by",title);
           }} 
           className='bg-gray-950 p-2 rounded
            text-white'>submit</button>

        </form>
    </div>
  )
}

export default App