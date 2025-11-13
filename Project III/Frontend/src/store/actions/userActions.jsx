     
import  axios  from '../../utils/config';
import { loaduser, removeuser } from '../Reducers/UserSlice';  

export const asynctCurrentUser=()=>async (dispatch,getState)=>{
    try {
        const user=JSON.parse(localStorage.getItem("user"))
        if(user)dispatch(loaduser(user))
            else console.log("user not Found")
    } catch (error) {
        console.log(error)
    }
    
}   

export const asyncLogoutUser=()=>async (dispatch,getState)=>{
    try {
        localStorage.removeItem("user") 
        dispatch(removeuser())
        console.log("user logout ") 
    } catch (error) { 
        console.log(error) 
    } 
 
} 
  
export const asyncloginUser=(login)=> async(dispatch,getState)=>{  
    try {  
         const {data}=await axios.get(`/user?email=${login.email}&password=${login.password}`) 
        console.log(data[0]) 
        localStorage.setItem("user",JSON.stringify(data[0]))
    } catch (error) {
        console.log(error)
    }
}

export const asyncRegister=(register)=>async(dispacth,getState)=>{
   try {
    const res= await axios.post("/user",register)
    console.log(res);
   } catch (error) {
    console.log(error); 
   }
}


