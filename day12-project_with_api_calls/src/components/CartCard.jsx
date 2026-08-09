import { Trash2, Plus, Minus } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const CartCard = ({ product }) => {
  const { increaseQuantity, isInCart, decreaseQuantity, removeItem } =
    useContext(MyContext);
  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id);
  };
  const handleDecreaseQuantity = () => {
    if (product.quantity > 1) {
      decreaseQuantity(product.id);
    } else {
      return alert(
        "Quantity cannot be less than 1. Please remove the item from the cart if you want to decrease it further.",
      );
    }
  };
  const remove = () => {
    if (product.quantity > 1) {
      alert(
        "Please decrease the quantity to 1 before removing the item from the cart.",
      );
    } else {
      removeItem(product.id);
    }
  };
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-md md:flex-row md:products-center">
      {/* Product Image */}
      <div className="flex h-28 w-28 products-center justify-center rounded-lg bg-gray-100 p-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 capitalize">
          {product.category}
        </span>

        <h2 className="mt-2 line-clamp-2 text-lg font-semibold">
          {product.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex products-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span>{product.rating.rate}</span>
          <span className="text-sm text-gray-500">
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>

      {/* Price + Quantity */}
      <div className="flex flex-col products-end gap-4">
        <h3 className="text-2xl font-bold text-green-600">${product.price}</h3>

        {/* Quantity */}
        <div className="flex products-center rounded-lg border">
          <button className="p-2 hover:bg-gray-100">
            <Minus size={18} onClick={handleDecreaseQuantity} />
          </button>

          <span className="w-10 text-center font-semibold align-self-center">
            {product.quantity}
          </span>

          <button className="p-2 hover:bg-gray-100">
            <Plus size={18} onClick={handleIncreaseQuantity} />
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={remove}
          className="flex products-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
        >
          <Trash2 size={18} />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
