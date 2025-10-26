import React from 'react'
import { useParams } from 'react-router-dom'
 
const CourseDetails = () => {
    const parmes=useParams()
    console.log(parmes.id);
  return (
    <div>
        <h1>{parmes.id} Course Details Pages....</h1>
    </div>
  )
}

export default CourseDetails

