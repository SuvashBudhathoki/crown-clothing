import React from "react";
import "./sign-in-sign-up.styles.scss";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
