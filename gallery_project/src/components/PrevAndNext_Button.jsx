import React from 'react'

const PrevAndNext_Button = (props) => {
  const index=props.index
  const setIndex=props.Index
  return (
    <div className=' flex justify-center items-center p-4  gap-2'>
         <button onClick={()=>{
          if(index>1){
              setIndex(index-1)
          }
         }} 
         className=' bg-amber-500 text-sm text-black 
           px-3 py-1 rounded cursor-pointer active:scale-95 '
           >prev</button> 
           <h4 >Page {index}</h4>
         <button onClick={()=>{
          setIndex(index+1)
         }}
         className=' bg-amber-500 text-sm text-black
           px-3 py-1 rounded cursor-pointer active:scale-95 '
           >next</button>
        </div>
  )
}

export default PrevAndNext_Button