import React from 'react'

const App = () => {


  return (
    <div>
        <input className='bg-amber-50 text-black m-10' onChange={(e)=>{console.log(e.target.value);
        }} type="text" />

        <div className='h-[200px] w-[200px] bg-red-800 ' onMouseMove={(dets)=>{console.log("nachooo");
        }}>
 </div>

       
            <div className='h-screen w-screen bg-gray-800 ' onWheel={(e)=>{ console.log(e.deltaX)}}>page1</div>
       
    </div>
  )
}

export default App