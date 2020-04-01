import { CartActionTypes } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN_CART
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
