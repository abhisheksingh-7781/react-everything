import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-20 bg-teal-300 p-10 text-3xl font-bold text-pink-100 w-full flex justify-center items-center gap-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product" >Product</NavLink>
        <NavLink to="/login" >Login</NavLink>
    </nav>
  )
}

export default Navbar