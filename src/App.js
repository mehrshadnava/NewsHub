import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import Translate from "./Components/Translate";

export default class App extends Component {
  render() {
    return (
      <div>
        <Translate></Translate>
        <News></News>
      </div>
    );
  }
}
