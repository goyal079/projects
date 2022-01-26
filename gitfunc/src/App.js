// import React, { Component } from "react";
import About from "./components/Layout/About";
import NotFound from "./components/Layout/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import AllUsers from "./components/User/AllUsers";
import AlertState from "./context/Alert/AlertState";
import GithubState from "./context/Github/GithubState";
import User from "./components/User/User";
const App = () => {
  return (
    <AlertState>
      <GithubState>
        <Router>
          <div
            className="App"
            style={{
              backgroundColor: "#0D1117",
              height: "100%",
            }}
          >
            <Navbar logo="fab fa-github" appName=" Github App" />
            <div className="container">
              <Switch>
                <Route path="/githubProject/about">
                  <Route exact path="/githubProject/about">
                    <About teamMember="Us" />
                  </Route>
                  <Route exact path="/githubProject/about/mansoor">
                    <About teamMember="Mansoor" />
                  </Route>
                </Route>
                <Route
                  path="/githubProject/user/:id"
                  render={(props) => <User {...props} />}
                />
                <Route exact path="/githubProject">
                  <AllUsers />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </GithubState>
    </AlertState>
  );
};
export default App;
