import React from 'react'

const RightCardContent = (props) => {
  return (
       <div className=' absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className=' w-13 h-13 flex justify-center items-center bg-white  rounded-full text-2xl font-semibold'>{props.id+1}</h2>
        <div>
            <p className='text-white  text-lg leading-normal mb-15'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi esse expedita minus et. Nisi, cupiditate?</p>
            <div className='flex items-center justify-between'>
                <button className=' bg-blue-600 text-white  font-medium px-8 py-3 rounded-full '>{props.tag}</button>
                <button className=' bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>

      </div>
  )
}

export default RightCardContent