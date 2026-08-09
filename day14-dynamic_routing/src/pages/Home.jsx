import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { productData, setProductData } = useContext(MyStore);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {productData.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Home;
