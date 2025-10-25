import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Content from './pages/Content'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
       <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/content' element={<Content/>}/>
          </Routes>
    </div>
  )
}

export default App