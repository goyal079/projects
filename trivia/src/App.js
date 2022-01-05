import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Screen from "./components/Screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: [],
      misc: [],
    };
  }
  async componentDidMount() {
    let [a, b] = await Promise.all([
      fetch("https://opentdb.com/api_category.php").then((res) => res.json()),
      fetch("https://opentdb.com/api.php?amount=10").then((res) => res.json()),
    ]);
    a = a.trivia_categories;
    b = b.results;
    this.setState({ cat: a, misc: b });
  }
  render() {
    return (
      <div className="d-flex">
        <Router>
          <NavBar items={this.state.cat} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Quiz questions={this.state.misc} />}
            ></Route>
            <Route
              path="/quiz"
              element={<Quiz questions={this.state.misc} />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
