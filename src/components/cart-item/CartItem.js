import React from "react";

//styled components

import {
  ItemDetailsContainer,
  CartItemContainer,
  CartItemImageContainer,
  PriceContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImageContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>{name}</ItemDetailsContainer>
    <PriceContainer>
      {quantity}x${price}
    </PriceContainer>
  </CartItemContainer>
);

export default CartItem;
