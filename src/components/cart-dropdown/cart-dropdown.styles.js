import styled from "styled-components";
import CustomButton from "../custom-button/CustomButton";

export const CartDropdownContainer = styled.div`
  border: 1px solid black;
  height: 340px;
  width: 240px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  background-color: #fff;
  position: absolute;
  right: 40px;
  top: 90px;
  padding: 20px;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
