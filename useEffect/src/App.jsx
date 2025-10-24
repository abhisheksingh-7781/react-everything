import React, { useEffect, useState } from 'react'

const App = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
      const intervel=setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000);
    
      return () => {
        clearInterval(intervel)
      }
    }, []);
    
  return (
    <div>
      <h1>current Time is {time}</h1>
    </div>
  )
}

export default App