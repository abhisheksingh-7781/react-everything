import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
 const {data} = useContext(recipeContext)

 const renderRecipe=data.map((recipe)=>(
     <RecipeCard key={recipe.id} recipe={recipe} />  
 ))

  return (
    <div className=' min-h-screen bg-[#0b1120] flex flex-wrap justify-center gap-6 p-8'>{data.length > 0 ? renderRecipe :"No Recipes Found !"}</div>
  
  )
}

export default Recipes