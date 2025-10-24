import React, { useEffect, useState } from 'react'

const App = () => {
    const [num1, setnum1] = useState(10)
    const [num2, setnum2] = useState(20)

    useEffect(() => {
        console.log("useEffect is running ....")
    }, [num1,num2])
    


  return (
    <div>
        <h1 >{num1}</h1>
        <button onClick={()=>{setnum1(num1+1)}}>Click me</button>

        <h1>{num2}</h1>
        <button onClick={()=>{setnum2(num2+1)}}>click me</button>

    </div>
  )
}

export default App