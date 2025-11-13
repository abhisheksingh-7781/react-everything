import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProducts,
  asyncUpdateProducts,
} from "../../Store/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const {productReducer:{products},userReducer:{user}} = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);
  console.log(products,user);
  

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      desc: product?.desc,
      price: product?.price,
    },
  });
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const UpdateHendler = (product) => {
    dispacth(asyncUpdateProducts(id, product));
    //  navigate("/products")
    //  reset()
  };

  const DeleteHendler = () => {
    dispacth(asyncDeleteProducts(id));
    navigate("/products");
  };
  return product ? (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black 
p-8 flex flex-col justify-start items-center gap-10"
    >
      <div className="w-full max-w-7xl  bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-12">
        {/* LEFT: Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold text-white mb-3">
              {product.title}
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {product.desc}
            </p>

            {/* Price */}
            <p className="text-4xl font-bold text-blue-400 mb-6">
              ₹ {product.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-5">
            <button className="w-1/2 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-lg font-semibold transition-all">
              Add to Cart
            </button>
            <button className="w-1/2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-lg font-semibold transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <hr className="text-white w-full " />
     {user && user.isAdmin && 
   <form
        onSubmit={handleSubmit(UpdateHendler)}
        className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white"
      >
        <h2 className="text-center text-4xl font-semibold mb-8 tracking-wide">
          Update Product
        </h2>

        {/* Image URL */}
        <input
          {...register("image")}
          type="url"
          placeholder="Enter Image URL"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />

        {/* Title */}
        <input
          {...register("title")}
          type="text"
          placeholder="Enter Product Title"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />

        {/* Price */}
        <input
          {...register("price")}
          type="number"
          step="any"
          placeholder="Enter Product Price"
          className="w-full mb-5 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />

        {/* Description */}
        <textarea
          {...register("desc")}
          placeholder="Enter Product Description"
          className="w-full h-32 mb-6 p-4 bg-gray-900/70 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg resize-none"
        ></textarea>

        {/* Button */}
        <div className="flex justify-center items-center gap-10">
           <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-xl font-semibold shadow-lg">
          Update Product
        </button>

             <button type="button"
        onClick={DeleteHendler}
        className="w-full py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl text-xl font-semibold shadow-lg"
      >
        Delete Product
      </button>
        </div>
       
      </form>}

 
    </div>
  ) : (
    "loading"
  );
};

export default ProductDetails;
