import styled from "styled-components";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-cart.svg";

export const CartIconContainer = styled.div`
  height: 45px;
  width: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIconSVG)`
  height: 24px;
  width: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  bottom: 12px;
  font-weight: bold;
`;
