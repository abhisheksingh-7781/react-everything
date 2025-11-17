import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { asyncRegister } from "../Store/actions/userActions"

  
const Register = () => {   
   const {register,handleSubmit,reset} = useForm()
   const dispacth=useDispatch()
   const navigate=useNavigate()

   const RegisterHendler=(register)=>{
     register.id=nanoid()
     register.isAdmin=false
     register.cart= [ ]
     dispacth(asyncRegister(register))
     navigate("/login")
     reset()
   }
  return (
    <div className="py-10 px-20 flex justify-center items-center ">
         <form onSubmit={handleSubmit(RegisterHendler)} className="flex flex-col justify-center  w-1/4 text-3xl" action="">   
             <input {...register("username")} className=" bg-gray-800 text-white mb-5 p-3 outline-0 border-b-2  " type="text" placeholder="Enter username"  />
            <input {...register("email")} className="bg-gray-800 text-white mb-5 p-3 outline-0 border-b-2" type="email" placeholder="Enter your email"  />  
            <input {...register("password")} className="bg-gray-800 text-white mb-5 p-3 outline-0 border-b-2" type="password" placeholder="Enter your password" />  
            <button className=" px-5 py-2 rounded-xl mt-5 mb-3 bg-blue-500 text-white w-fit ">Register</button>  
            <p className="text-xl text-nowrap"> Already Have account <Link className=" text-blue-500  " to="/login" >Login</Link></p>  
         </form>
    </div>
  ) 
} 

export default Register  