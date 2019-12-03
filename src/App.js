import React, { Component } from "react";

import { withRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/navbar/navigation";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/users/signup/Signup";
import SignIn from "./components/users/signin/SignIn";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Navigation />
        <Signup />
        <SignIn />
        <Switch>
          <Route component={SignIn} path="/signin"></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
