import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navbar/navigation";

class App extends Component {
  render() {
    return <React.Fragment>
        <Navigation/>
    </React.Fragment>;
  }
}

export default App;
