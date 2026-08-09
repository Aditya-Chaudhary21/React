import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  const { cartItems } = useContext(MyContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-2xl font-semibold text-gray-500">
            Your Cart is Empty
          </h2>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-5 hover:shadow-lg transition"
              >
                {/* Product Image */}
                <div className="w-full md:w-40 h-40 bg-gray-100 rounded-lg flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.category}
                    </p>

                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between mt-4">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        ${item.price}
                      </p>

                      <p className="text-yellow-500">
                        ⭐ {item.rating.rate} ({item.rating.count} reviews)
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-3 md:mt-0">
                      <span className="bg-gray-200 px-3 py-1 rounded">
                        Qty: 1
                      </span>

                      <button className="bg-red-500 hover:bg-red-800 scale-transform hover:scale-100 text-white px-4 py-2 rounded-lg">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 bg-white p-6 rounded-xl shadow-md flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;