import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asyncLogoutUser } from '../Store/actions/userActions'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const user=useSelector((state)=>state.userReducer.user)
  const LogoutHendler=()=>{
    dispatch(asyncLogoutUser())
    navigate("/")
  }
  
  return (
    <nav className='h-20 bg-teal-300 p-10 text-3xl font-bold text-pink-100 
    w-full flex justify-center items-center gap-10'>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/products" >Product</NavLink>
      {user ? <>
      <NavLink to="/admin/create-product">Create Product</NavLink>
      <button onClick={LogoutHendler}>Logout</button>
       </> :
       <>
       <NavLink to="/login" >Login</NavLink>
       </> }  
       
        
 
      
    </nav>
  )
}

export default Navbar