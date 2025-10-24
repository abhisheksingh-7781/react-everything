import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
     const [data, setData] = useState([])
   
    const getData= async()=>{
      const response= await axios.get("https://dummyjson.com/quotes")
      console.log(response.data.quotes);
      
    }

    

  return (
    <div>
      <button onClick={getData}>get Data</button>
      <div>
       {data.map(function(elem,idx){
          return <h3 key={idx}>Hello</h3>
       })}
      </div>
    </div>
  )
}

export default App