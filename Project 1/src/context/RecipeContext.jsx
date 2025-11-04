import React, { createContext, useEffect, useState } from 'react'
  
export const recipeContext= createContext(null)
const RecipeContext = (props) => {
    const [data, setData] = useState([])

   useEffect(() => {
      
       setData(JSON.parse(localStorage.getItem("recipes")) || [] );
       
    },[])
    
    
  return (
    <recipeContext.Provider value={{data,setData}}>{props.children}</recipeContext.Provider>
  )
}

export default RecipeContext