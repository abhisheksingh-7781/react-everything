import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {
 console.log(props.children);
 
  return (
    <div className='nav'>
        <h1>zepto</h1>
        <Nav2 them={props.them} setThem={props.setThem} />
    </div>
  )              
}   
       
export default Navbar    
                       
