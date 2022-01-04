import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Screen from "./components/Screen";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  render() {
    return (
      <div className="d-flex">
        <NavBar />
        <Screen />
      </div>
    );
  }
}
export default App;
