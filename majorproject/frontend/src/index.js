import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import MyApp from "./components/MyApp";

class App extends Component {
  render() {
    return <MyApp />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
