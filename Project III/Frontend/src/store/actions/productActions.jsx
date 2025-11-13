
import axios from '../../utils/config'
import { loadProducts } from '../Reducers/ProductSlice' 


export const asyncLoadProducts=()=>async(dispatch,getState)=>{
    try {
        const {data}=await axios.get("/products") 
        dispatch(loadProducts(data))
    } catch (error) {
        console.log(error)
    }
}


export const asyncCreateProducts=(product)=>async(dispatch,getState)=>{
  try {
       await axios.post("/products",product)
         dispatch(asyncLoadProducts()) 
    } catch (error) {
        console.log(error)
    }
}


export const asyncUpdateProducts=(id , product)=>async(dispatch , getState)=>{
  try {
       await axios.patch("/products/"+id, product)
         dispatch(asyncLoadProducts()) 
    } catch (error) {
        console.log(error)
    }
}

export const asyncDeleteProducts=(id )=>async(dispatch , getState)=>{
  try {
       await axios.delete("/products/"+id)
         dispatch(asyncLoadProducts()) 
    } catch (error) {
        console.log(error)
    }
}