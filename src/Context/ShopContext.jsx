import React from "react";
import { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= all_products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  const addToCart = (itemId) => {
    console.log(itemId);
    
    setCartItems((prev) => {
      return {...prev , [itemId] : prev[itemId] + 1 }
    });
    // console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 }
    });
    // console.log(cartItems);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if(cartItems[item] > 0){
      totalCount += cartItems[item];
    }
    }
    return totalCount;
  };

  const contextValue = { all_products, cartItems, addToCart, removeFromCart , getTotalCartAmount, getTotalCartItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
