import React, { useState } from 'react'
import Navbar from './components/Navbar'


const App = ( ) => {
   const [them, setThem] = useState("light")
  return (
    <div>
      <Navbar them={them} setThem={setThem}>
        <h1>This is children</h1>
        <h1>This is children</h1>
        <h1>This is children</h1>
      </Navbar>
    </div>
  )
}       

export default App

      
      