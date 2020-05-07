import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  margin: 40px auto;
  display: flex;
  flex-direction: column;

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 33%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 2.2rem;
`;

export const TestWarningContainer = styled.div`
  color: red;
`;
