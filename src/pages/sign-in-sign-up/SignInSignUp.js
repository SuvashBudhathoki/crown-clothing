import React from "react";
import "./sign-in-sign-up.styles.scss";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

//styled component

import { SignInSignUpContainer } from "./sign-in-sign-up.styles";

const SignInSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInSignUpPage;
