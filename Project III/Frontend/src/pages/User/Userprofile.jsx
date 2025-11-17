import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asyncLogoutUser, asyncupdateuser } from '../../Store/actions/userActions';

const Userprofile = () => {
   const [show, setShow] = useState(false);
 
  const {
    userReducer:{user}
} = useSelector((state) => state);


  
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const UpdateUserHendler = (users) => {
    console.log(user);
    
    dispacth(asyncupdateuser(user.id,users))
    //  navigate("/login")
    //  reset()
  };

  

  const DeleteHendler = () => {
   dispacth(asyncdeleteuser(user.id))
    navigate("/login");
  };

    const LogoutHendler = () => {
   dispacth(asyncLogoutUser(user.id))
    navigate("/login");
  };


  return user ?  (
    <div className='flex justify-center items-center mt-20 mr-5 ml-5'>

           <form
        onSubmit={handleSubmit(UpdateUserHendler)}
        className=" relative w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white"
      >
        <h2 className="text-center text-4xl font-semibold mb-8 tracking-wide">
          Update User
        </h2>

        {/* Title */}
        <input
          {...register("username")}
          type="text"
          placeholder="Enter username"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />

        {/* Price */}
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />

        {/* Description */}
          <input
          {...register("password")}
          type={show ? "text" : "password"} 
          placeholder="Enter your password"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />
         <span
        onClick={() => setShow(!show)}         // 👈 toggle on click
        className="absolute right-10 bottom-27 -translate-y-1/2 cursor-pointer text-xl select-none"
      >
        {show ? "🙈" : "👁"}                    {/* 👈 change icon */}
      </span>

        {/* Button */}
        <div className="flex justify-center items-center gap-4">

           <button className="w-full py-3 bg-green-600 hover:bg-green-700  transition-all duration-300 rounded-xl text-md font-semibold shadow-lg">
          Update User
        </button>

                      <button type="button"
        onClick={LogoutHendler}
        className="w-full py-3  bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-md font-semibold shadow-lg"
      >
        Logout User
      </button>

             <button type="button"
        onClick={DeleteHendler}
        className="w-full py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl text-md font-semibold shadow-lg"
      >
        Delete User
      </button>


      
        </div>
       
      </form>

 
    </div>
  ) : "Loading "  
} 

export default Userprofile