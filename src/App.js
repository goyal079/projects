import React, { Component } from "react";
import About from "./components/Layout/About";
import NotFound from "./components/Layout/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/User/Users";
import Search from "./components/User/Search";
import axios from "axios";
import User from "./components/User/User";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], loading: true, user: {}, repos: [] };
  }
  async componentDidMount() {
    let res = await axios.get("https://api.github.com/users ");
    this.setState({ users: res.data, loading: false });
  }
  searchUsers = async (query) => {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${query}`);
    this.setState({ users: res.data.items, loading: false });
  };
  getUserInfo = async (username) => {
    this.setState({ loading: true });
    let user = await axios.get(`https://api.github.com/users/${username}`);
    let repos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    this.setState({ user: user.data, repos: repos.data, loading: false });
  };
  resetUserInfo = () => {
    this.setState({ user: {}, repos: [] });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar logo="fab fa-github" appName="Github App" />
          <div className="container">
            <Switch>
              <Route path="/about">
                <Route exact path="/about">
                  <About teamMember="Us" />
                </Route>
                <Route exact path="/about/mansoor">
                  <About teamMember="Mansoor" />
                </Route>
              </Route>
              <Route
                path="/user/:id"
                render={(props) => (
                  <User
                    user={this.state.user}
                    repos={this.state.repos}
                    getUserInfo={this.getUserInfo}
                    laoding={this.state.loading}
                    {...props}
                  />
                )}
              />
              <Route exact path="/">
                <Search searchUsers={this.searchUsers} />
                <Users users={this.state.users} loading={this.state.loading} />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
