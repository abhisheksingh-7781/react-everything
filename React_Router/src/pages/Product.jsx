import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-5 py-4'>
            <Link to='/product/men'>Men's</Link>
            <Link to='/product/women'>Women's</Link>
            <Link to='/product/kids'>Kids</Link>
        </div>

        <h2 className='flex justify-center absolute top-1/3 left-1/3 -translatex-50% -translatey-50% font-bold text-2xl'>Product</h2>
      
        <Outlet />

          
    </div>
  )
}

export default Product