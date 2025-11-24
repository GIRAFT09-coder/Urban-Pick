import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart , getTotalCartAmount} =
    useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {
      all_products.map((product, index) => {
        console.log(`Product ${product.id} => Quantity: ${cartItems[product.id]}`);
        if (cartItems[product.id] > 0) {
          return (
            <div key={index}>
              <div className="cartitems-format cartItems-format-main">
                <img src={product.image} alt="" className="carticon-product-icon" />
                <p>{product.name}</p>
                <p className="cartitems-total-1">${product.new_price}</p>
                <button className="cartitems-quantity">{cartItems[product.id]}</button>
                <p className="cartitems-total-1">$ {product.new_price * cartItems[product.id]}</p>
                <img className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-promocode">
            <p>Have a promocode? Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
            </div>
        </div>
          <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
