import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';
import PrevAndNext_Button from './components/PrevAndNext_Button';

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const data = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }
    useEffect(() => {
      data()
  }, [index])

  let printUserData = <h2 className='text-gray-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-bold text-xl'>Loading.....</h2>

  if (userData.length > 0) {
    printUserData = userData.map((dets, idx) => {
      return <div key={idx}>
       <Card dets={dets}/>
      </div>
    })
  }
  return (
    <div className=' overflow-auto h-screen p-8 '>
      <div className=' flex flex-wrap  gap-5 '>
        {printUserData}</div>
    <PrevAndNext_Button index={index} setIndex={setIndex} /> 
    </div>
  )
}

export default App