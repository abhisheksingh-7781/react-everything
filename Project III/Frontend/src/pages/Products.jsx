import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from './../Store/actions/userActions';

const Products = () => {
  const dispatch=useDispatch()

  const user=useSelector((state)=>state.userReducer.user)
  const products=useSelector((state)=>state.productReducer.products)

  const AddToCartHendler=(product)=>{ 
        const userCart = user.cart || []; 
    const copyuser={...user, cart: [...userCart]} 
    // const copyuser={...user,cart: [...user.cart]} 
    const x=copyuser.cart.findIndex((e)=>e?.product?.id==product.id) 
  
    if(x == -1){  
      copyuser.cart.push({product,quantity:1});  
    }else{  
      copyuser.cart[x]={ 
        product,
        quantity:copyuser.cart[x].quantity+1, 
      }
    }
    console.log(copyuser)
    dispatch(asyncupdateuser(copyuser.id,copyuser));
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black p-8">
      {/* Product Container (Flex layout) */}
      <div className="flex flex-wrap justify-center gap-10">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl 
                         hover:scale-105 hover:shadow-2xl transition-all duration-300 
                         flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover rounded-xl mb-4"
              />

              {/* Product Title */}
              <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                {product.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                {product.desc ?.slice(0,40)?? ""}...
              </p>

              {/* Price */}
              <p className="text-2xl font-bold text-blue-400 mb-4">
                ₹ {product.price}
              </p>

              {/* Button */}
              <div onClick={()=>AddToCartHendler(product)} className="flex justify-between items-center gap-8 ">
                   <button className="w-[50%] py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all mt-auto">
                Add to Cart
              </button>
              <Link className="w-[50%] flex items-center justify-center py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all mt-auto"
               to={`/product/${product.id}`}>More InFo</Link>
              </div>
              {/* <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all mt-auto">
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`}>More InFo</Link> */}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center w-full">
            No products available 😔
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;

       
       