import React from "react";
import {createContext , useState}  from "react";


export const MyContext = createContext();

 export const MyContextProvider = ({ children }) => {
      const [isCartOpen, setIsCartOpen] = useState(true);
      const [cartItems, setCartItems] = useState([]);
    

    return (
        <MyContext.Provider value={{isCartOpen, cartItems, setIsCartOpen, setCartItems}}>
        {children}
        </MyContext.Provider>
 
);
 }
