
import { useState, createContext } from "react";

export const MyStore = createContext();

export const MyProvider = ({ children }) => {
 const [productData, setProductData] = useState([]);
 const [singleProduct,setSingleProduct]=useState({})
 
 
 

  return <MyStore.Provider value={{ productData, setProductData, singleProduct, setSingleProduct }}>{children}</MyStore.Provider>;
};

