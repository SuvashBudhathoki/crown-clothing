import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">{name}</div>
    <span className="price">
      {quantity}x${price}
    </span>
  </div>
);

export default CartItem;
