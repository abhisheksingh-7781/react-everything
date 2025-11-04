import { useContext, useEffect, useState } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipes = () => {

   // make parsing safe by providing a string default so JSON.parse never receives null
   const [favroite, setfavroite] = useState(
     JSON.parse(localStorage.getItem("fav") || [])
   );

  const navigate = useNavigate();
  const params = useParams();
  const { data, setData } = useContext(recipeContext);
  const recipe = data.find((recipe) => params.id === recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.image,
      desc: recipe?.desc,
      inst: recipe?.inst,
      category: recipe?.category,
    },
  });

  const UpdateHendler = (recipe) => {
    const index = data.findIndex((recipe) => params.id === recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    localStorage.setItem("recipes", JSON.stringify(copyData));
   
    toast.success("recipe updated !");
  };

  const deleteHendler = () => {
    const filterData = data.filter((r) => r.id !== params.id);
    setData(filterData);
    localStorage.setItem("recipes", JSON.stringify(filterData));
    const filterfav=favroite.filter((f)=>f.id !== recipe?.id)
    setfavroite(filterfav)
    localStorage.setItem("fav",JSON.stringify(filterfav))
    toast.success("recipe delete success");
    navigate("/recipe");
  };




 const FavHandler = () => {
     let copyfav = [...favroite];
     copyfav.push(recipe)
     setfavroite(copyfav)
     localStorage.setItem('fav',JSON.stringify(copyfav));
  }; 

  const UnFavHandler = () => {
   const filterfav=favroite.filter((f) => f.id != recipe?.id );
   setfavroite(filterfav)
   localStorage.setItem("fav",JSON.stringify(filterfav));
  };

  useEffect(() => {
  
  console.log("mount")

  return () => {
  console.log()
  }
}, [favroite]);

  return recipe ? (
    <div className="w-full flex h-screen ">
      <div className="left w-1/2 p-15 ">
        <h1 className="text-5xl font-bold mb-4 mx-5 text-white">
          {recipe?.title}
        </h1>
        <div className=" rounded-xl relative overflow-hidden  flex flex-col">
          <img
            className=" w-90 h-70 object-cover rounded-2xl"
            src={recipe?.image}
            alt="Recipe"
          />
          <span className="text-5xl cursor-pointer absolute right-30 top-70">
            {favroite.find((r)=>r.id === recipe.id) ? (
              <i
                onClick={UnFavHandler}
                className="text-red-600 absolute ri-heart-fill"
              ></i>
            ) : (
              <i
                onClick={FavHandler}
                className="text-red-600 absolute ri-heart-line"
              ></i>
            )}
          </span>

          <p className="text-gray-300 font-medium text-xl mt-2">
            <strong className="text-2xl text-white ">Discription</strong> :{" "}
            {recipe?.desc}
          </p>
          <p className="text-gray-300 font-medium text-xl mt-2">
            <strong className="text-2xl text-white ">Instructions</strong> :{" "}
            {recipe?.inst}
          </p>
          <p className="text-gray-300 font-medium text-xl mt-2">
            <strong className="text-2xl text-white ">category</strong> :{" "}
            {recipe?.category}
          </p>
        </div>
      </div>
      <div className="right w-1/2 p-2 ">
        <form
          onSubmit={handleSubmit(UpdateHendler)}
          className="bg-sky-50 rounded-xl p-8 shadow-md flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              Recipe Information
            </h2>
            <p className="text-gray-500 mb-6">
              Edit and update your recipe below
            </p>

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
            <button
              onClick={deleteHendler}
              type="button"
              className="bg-red-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-600 transition-all"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    "Loading...."
  );
};

export default SingleRecipes;
