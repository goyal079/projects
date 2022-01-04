import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Screen from "./components/Screen";

const categories = async () => {};
categories();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
    };
  }
  async componentDidMount() {
    let a = await fetch("https://opentdb.com/api_category.php").then((res) =>
      res.json()
    );
    a = a.trivia_categories;
    this.setState({ cat: a });
  }
  render() {
    return (
      <div className="d-flex">
        <NavBar items={this.state.cat} />
        <Screen />
      </div>
    );
  }
}
export default App;
