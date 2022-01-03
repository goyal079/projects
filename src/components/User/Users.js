import React, { Component } from "react";
import UserItem from "./UserItem";

import Spinner from "../Layout/Spinner";

class Users extends Component {
  render() {
    const userStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gridGap: "1rem",
    };
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div style={userStyle}>
        {this.props.users.map((user) => (
          <UserItem user={user} key={user.id} loading={this.props.loading} />
        ))}
      </div>
    );
  }
}
export default Users;
