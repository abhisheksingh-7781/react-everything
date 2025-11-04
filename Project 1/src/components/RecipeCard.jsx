import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, image, desc, inst, category } = props.recipe;
  return (
    <Link
      to={`/recipe/details/${id}`}
      className="bg-[#0f172a] text-white h-[480px]  w-[320px] object-cover rounded-2xl overflow-hidden shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-200"
    >
      {/* Image */}
      <img src={image} alt={title} className="h-44 w-full object-cover" />

      {/* Content */}
      <div className="p-5 flex flex-col  gap-3 flex-1">
        {/* Category */}
        <span className="bg-gray-800 text-sm px-3 py-1 rounded-full w-fit">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold">
          <strong className="text-white">Title:</strong> {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm">
          <strong className="text-white">Description:</strong>{" "}
          {desc.slice(0, 65)}... <small className="text-blue-400">More</small>
        </p>

        {/* Instructions */}
        <p className="text-gray-300 text-sm leading-relaxed">
          <strong className="text-white">Instructions:</strong>{" "}
          {inst.slice(0, 65)} ... <small className="text-blue-400">More</small>
        </p>

        {/* Button */}
        <div className="mt-2">
          <button className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-4 rounded-lg text-sm w-full transition-colors duration-200">
            View Recipe
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
