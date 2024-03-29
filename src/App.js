import React, { Component } from "react";

import { withRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/navbar/navigation";

import Signup from "./components/users/signup/Signup";
import SignIn from "./components/users/signin/SignIn";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Footer />
        <Switch>
          <Route component={SignIn} path="/signin"></Route>
          <Route component={Signup} path="/"></Route>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
