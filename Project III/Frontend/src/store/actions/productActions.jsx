
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


export const asyncCreateProducts=()=>async(dispatch,getState)=>{
  try {
         const {data}=await axios.post("/products")
         dispatch(asyncLoadProducts()) 
    } catch (error) {
        console.log(error)
    }
}

