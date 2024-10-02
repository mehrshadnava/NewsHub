import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Translate from "./Components/Translate";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Translate></Translate>
        <News></News>

      </div>
    );
  }
}
