import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unSuscribeFromAuth = null;
  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
