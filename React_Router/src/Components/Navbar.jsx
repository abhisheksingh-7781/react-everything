import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-3 bg-cyan-700'>   
        <h2 className='text-3xl'>Zomato</h2>   
        <div className='flex gap-6'>  
          <Link to='/'>Home</Link>  
          <Link to='/about' >About</Link>  
          <Link to='/content'>Content</Link>  
          <Link to='/product'>Product</Link>   
        </div>
    </div>
  )
}

export default Navbar


