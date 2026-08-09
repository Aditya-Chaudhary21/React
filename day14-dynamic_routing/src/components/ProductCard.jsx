import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router"

function ProductCard({ product }) {
    const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div onClick={()=>{navigate(`/detail/${product.id}`)}}className="h-64 flex items-center justify-center bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">
            {product.rating.rate}
          </span>
          <span className="text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;