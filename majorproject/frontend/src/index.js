import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import MyApp from "./components/MyApp";
import { HashRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    <Router>
      <MyApp />
    </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
