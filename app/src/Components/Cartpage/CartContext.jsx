
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState([]);

  const addCart = (product) => {
    setCartItem((prevItem) => {
      const existItem = prevItem.find((item) => item.id === product.id);

      if (existItem) {
        return prevItem.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItem, { ...product, quantity: 1 }];
    });
  };

  const decrease = (id) => {
    setCartItem((prevItem) =>
      prevItem
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increase = (id) => {
    setCartItem((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const remove=(id)=>{
    setCartItem((prevItem)=>
    prevItem.filter((item)=>
      item.id!=id
    ))
  };

  return (
    <CartContext.Provider value={{ cartItem, addCart, increase, decrease, setCartItem,remove
     }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);