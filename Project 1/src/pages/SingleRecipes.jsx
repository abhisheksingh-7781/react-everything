import { useContext } from "react"
import { recipeContext } from "../context/RecipeContext"
import {  useNavigate, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipes = () => {
      const navigate=useNavigate()
         const params=useParams()
    const {data,setData}=useContext(recipeContext)
      const recipe=data.find((recipe)=> params.id===recipe.id)
  const { register, handleSubmit,reset } = useForm({
    defaultValues:{
      title:recipe.title,
      image:recipe.image,
      desc:recipe.desc,
      inst:recipe.inst,
      category:recipe.category
    }
  });
      

  const onSubmit = (recipe) => {
  const index=data.findIndex((recipe)=>params.id===recipe.id)
   const copyData=[...data]
    copyData[index]={...copyData[index],...recipe}
    setData(copyData)

    toast.success("recipe updated !")

  };

  const deleteHendler=()=>{
    const filterData=data.filter((r)=>r.id !== params.id)
    setData(filterData)
    toast.success("recipe delete success")
    navigate("/recipe")
  }
  
  return  recipe ?(
    <div className="w-full flex">

        <div className="left w-1/2 p-10 ">
        <h1 className="text-5xl font-bold mb-4 mx-5 ">{recipe.title}</h1>
      < div className=" rounded-xl overflow-hidden  flex flex-col">
          <img
            src={recipe.image}
            alt="Recipe"
            className="w-[70%] h-[50%] object-cover rounded-2xl"
          />
           
          </div>
        </div>
        <div className="right w-1/2 p-2 ">
           <form onSubmit={handleSubmit(onSubmit)} className="bg-sky-50 rounded-xl p-8 shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Recipe Information
            </h2>
            <p className="text-gray-500 mb-6">Edit and update your recipe below</p>

            {/* Image URL */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Image URL</label>
              <input
              {...register("image")}
                type="text"                           
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Title</label>
              <input
               {...register("title")}
                type="text"                         
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Description</label>
              <textarea
               {...register("desc")}
                rows="2"                            
                className="w-full p-2 border rounded-md outline-none resize-none"
              ></textarea>
            </div>

            {/* Instruction */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700">Instruction</label>
              <textarea
               {...register("inst")}
                rows="2"                            
                className="w-full p-2 border rounded-md outline-none resize-none"
              ></textarea>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700">Category</label>
              <select
               {...register("category")}
                className="w-full p-2 border rounded-md outline-none bg-white"
              >
               <option value="breakfast">BreakFast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-yellow-400 text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-all"
            >
              Update Recipe
            </button>
            <button onClick={deleteHendler}
              type="button"
              className="bg-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition-all"
            >
              Delete Recipe
            </button>
          </div>
        </form>
        </div>
    
    </div>
):("Loading....")
  
}

export default SingleRecipes
