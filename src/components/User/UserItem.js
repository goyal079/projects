import React, { Component } from "react";
import { Link } from "react-router-dom";
class UserItem extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.user.avatar_url}
          style={{ width: "150px" }}
          alt="User Img"
          className="round-img"
        />
        <h3>{this.props.user.login}</h3>
        <div>
          <Link
            to={`/user/${this.props.user.login}`}
            className="btn btn-dark btn-sm my-1"
          >
            Github Profile
          </Link>
        </div>
      </div>
    );
  }
}
export default UserItem;
