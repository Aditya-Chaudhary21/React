import { Star } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItem, increaseQuantity, decreaseQuantity } =
    useContext(MyContext);

  const addToCart = () => {
    setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product added to cart");
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id);
  };
  const handleDecreaseQuantity = () => {
    if (isInCart && isInCart.quantity > 1) {
      decreaseQuantity(product.id);
    } else {
      return alert(
        "Quantity cannot be less than 1. Please remove the item from the cart if you want to decrease it further.",
      );
    }
  };
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="h-72 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{product.rating.rate}</span>

            <span className="text-sm text-gray-500">
              ({product.rating.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-green-600">${product.price}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          {isInCart ? (
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 w-full justify-center">
              <button onClick={handleDecreaseQuantity}>-</button>
              <span>{isInCart.quantity}</span>
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="flex-1 rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
            >
              Add to Cart
            </button>
          )}

          <button className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
