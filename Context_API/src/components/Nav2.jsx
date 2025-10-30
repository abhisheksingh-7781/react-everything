import React, { useContext } from 'react'
import { ThemChange } from '../context/ThemContext'

const Nav2 = () => {
  const [them, setThem]= useContext(ThemChange)

  return (
    <div className='nav2'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Content</h3>
        <h3>{them}</h3>
    </div>
  )
}

export default Nav2

