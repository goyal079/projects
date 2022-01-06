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
        <Router>
          <NavBar items={this.state.cat} />
          <Routes>
            <Route exact path="/" element={<Screen />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
