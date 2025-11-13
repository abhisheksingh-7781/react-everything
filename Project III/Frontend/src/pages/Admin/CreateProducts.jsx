
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncCreateProducts } from '../../Store/actions/productActions'

const CreateProducts = () => {
     const {register,handleSubmit,reset} = useForm()
   const dispacth=useDispatch()
   const navigate=useNavigate()

   const ProductHendler=(Product)=>{
     Product.id=nanoid()
     dispacth(asyncCreateProducts(Product))
       navigate("/products")
    //  reset()
   }
  return (
  <div className="h-full flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black p-5">

  <form 
    onSubmit={handleSubmit(ProductHendler)}
    className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-white"
  >

    <h2 className="text-center text-4xl font-semibold mb-8 tracking-wide">
      Add New Product
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
    <button 
      className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-xl font-semibold shadow-lg"
    >
      Submit Product
    </button>

  </form>

</div>

  )
}

export default CreateProducts


