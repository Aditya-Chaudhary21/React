import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyContext } from "./context/MyContext";

const App = () => {
  const { isCartOpen, cartItem } = useContext(MyContext);
  const [productData, setProductsData] = useState([]);

  const getProductData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error during api call", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-3 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className=" grid grid-cols-4 gap-4">
          {productData.map((elem) => {
            const isInCart = cartItem.find((item) => item.id === elem.id);

            return (
              <ProductCard product={elem} key={elem.id} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
