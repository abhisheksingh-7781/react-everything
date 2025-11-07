
import  axios  from '../utils/Axios';
import { loaduser } from './UserSlice';

export const getData=()=>async(dispatch,getState)=>{
    try {
        console.log("current state",getState())
        const data= await axios.get("/products")
        // console.log(data)  
        dispatch(loaduser(data.data))
    } catch (error) {
        console.log(error)
    }

}

