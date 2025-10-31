import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
     const navigate=useNavigate()
    const {data,setData}=useContext(recipeContext)
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (recpie) => {
    recpie.id=nanoid()

    // const copydata=[...data]
    // copydata.push(recpie)
    // setData(copydata)

    setData([...data,recpie])
    // reset()
    toast.success("New Recipe Created!")

  //  navigate("/recipe")


  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl">
        {/* Form Header */}
        <div className="px-8 py-6 border-b border-gray-200 bg-white rounded-t-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Create New Recipe</h2>
          <p className="mt-2 text-sm text-gray-600">Share your delicious recipe with the world</p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Image URL Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Recipe Image URL
              </label>
              <input
                {...register("image")}
                type="url"
                placeholder="Enter recipe image URL"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out
                         hover:bg-gray-50 placeholder-gray-400"
              />
              <small className="text-red-500 text-xs mt-1">This is how the error is shown</small>
            </div>

            {/* Title Input */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <input
                {...register("title")}
                type="text"
                placeholder="Enter recipe title"
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out
                         hover:bg-gray-50 placeholder-gray-400"
              />
              <small className="text-red-500 text-xs mt-1">This is how the error is shown</small>
            </div>

            {/* Description Textarea */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                {...register("desc")}
                rows="4"
                placeholder="Write your recipe description here..."
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out
                         hover:bg-gray-50 placeholder-gray-400 resize-none"
              ></textarea>
              <small className="text-red-500 text-xs mt-1">This is how the error is shown</small>
            </div>

            {/* Instructions Textarea */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Instructions
              </label>
              <textarea
                {...register("inst")}
                rows="4"
                placeholder="Write cooking instructions separated by commas..."
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out
                         hover:bg-gray-50 placeholder-gray-400 resize-none"
              ></textarea>
              <small className="text-red-500 text-xs mt-1">This is how the error is shown</small>
            </div>

            {/* Category Select */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                {...register("category")}
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                         focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out
                         hover:bg-gray-50"
              >
                <option value="">Select a category</option>
                <option value="breakfast">BreakFast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium
                         text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                         focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.02]"
              >
                Save Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
