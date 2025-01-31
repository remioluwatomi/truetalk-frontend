import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart({ numOfItem }) {
  return (
    <div className="cart">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{numOfItem}</span>
    </div>
  );
}

export default Cart;
