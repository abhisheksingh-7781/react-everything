import { nanoid } from "nanoid"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { asyncloginUser } from "../Store/actions/userActions"
import { useDispatch } from 'react-redux';

const Login = () => {
   const {register,handleSubmit,reset} = useForm()
   const dispatch=useDispatch()

   const LoginHandler=(login)=>{
   dispatch(asyncloginUser(login))
     console.log(login)
   }
  return (
    <div className="py-30 px-20 flex justify-center items-center ">
         <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col justify-center items-center w-1/4 text-3xl" action="">
            
            <input {...register("email")} className="bg-gray-800 text-white mb-5 p-3 outline-0 border-b-2" type="email" placeholder="Enter your email"   />
            <input {...register("password")} className="bg-gray-800 text-white mb-5 p-3 outline-0 border-b-2" type="password" placeholder="Enter your password" />
            <button className=" px-5 py-2 rounded-xl mt-5 mb-3 bg-blue-500 text-white w-fit ">Login</button>
            <p className="text-xl text-nowrap ">Don't have and account <Link className=" text-blue-500  " to="/register" >Register </Link></p>
         </form>
    </div>
  )
}

export default Login