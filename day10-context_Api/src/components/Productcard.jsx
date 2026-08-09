
import { Star } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ProductCard = ({ product }) => {
  const { setCartItems } = useContext(MyContext);
 
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{product.rating.rate}</span>
          <span className="text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <button onClick={() => setCartItems(prev => [...prev, product])} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;