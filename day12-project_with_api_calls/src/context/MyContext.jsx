import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const increaseQuantity = (productId) => {
    return setCartItem((prev) => {
      return prev.map((elem) => {
        return elem.id === productId
          ? { ...elem, quantity: elem.quantity + 1 }
          : elem;
      });
    });
  };

  const decreaseQuantity = (productId) => {
    setCartItem((prev) => {
      return prev.map((elem) => {
        return elem.id === productId
          ? { ...elem, quantity: elem.quantity - 1 }
          : elem;
      });
    });
  };

  const removeItem = (productId) => {
    setCartItem((prev) => {
      return prev.filter((elem) => {
        return elem.id !== productId;
      });
    });
  };
  return (
    <MyContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItem,
        setCartItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
