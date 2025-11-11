export default function HomePage({ products }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">

      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        🛒 Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products?.map((item, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl 
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Product Image */}
            <img 
              src={item.image} 
              alt={item.title}
              className="h-48 w-full object-cover rounded-xl mb-4"
            />

            {/* Product Title */}
            <h2 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
              {item.desc}
            </p>

            {/* Price */}
            <p className="text-2xl font-bold text-blue-400 mb-4">
              ₹ {item.price}
            </p>

            {/* Button */}
            <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all">
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
