import React, { Component } from "react";
import "./App.css";
import City from "./components/City";
// import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>City search application</h1>
        <City name="ditto" />
      </div>
    );
  }
}

export default App;
