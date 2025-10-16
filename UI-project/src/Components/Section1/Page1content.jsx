import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className=' gap-10 py-12 px-18 h-[90vh] flex items-center '>
     <LeftContent/>
     <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content