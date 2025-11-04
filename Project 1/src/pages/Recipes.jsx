import  { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
 const {data} = useContext(recipeContext)

 const renderRecipe=data.map((recipe)=>(
     <RecipeCard key={recipe.id} recipe={recipe} />  
 ))
// {data.length > 0 ? renderRecipe :" No Recipe found ! "  }
  return (
    <div className=' h-full bg-[#0b1120] text-white font-bold text-4xl  flex flex-wrap justify-start items-center gap-8 px-14 py-7'>
     {data.length>0 ? renderRecipe : <div className=' absolute top-1/2 left-1/2 transform:-translate-y-[50%] -translate-x-[40%]'> No Recipe found </div>}
    </div>
  
  )
}

export default Recipes