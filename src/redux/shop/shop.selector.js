import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

const selectCollections = createSelector(
  selectShopData,
  (shop) => shop.collections
);

export default selectCollections;
