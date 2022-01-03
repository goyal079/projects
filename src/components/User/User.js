import React from "react";

import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Layout/Spinner";
class User extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.resetUSerInfo();
  }
  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <div>
        <Link to="/" className="btn btn-light">
          Back to Home
        </Link>
        Hireable:
        {this.props.user.hireable ? (
          <i className="fas fa-check text-success"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={this.props.user.avatar_url}
              className="round-img"
              alt={this.props.user.login}
              style={{ width: "200px" }}
            />
            <h2>{this.props.user.login}</h2>
            <p>Location : {this.props.user.location}</p>
          </div>
          <div>
            {this.props.user.bio && (
              <>
                <h3>Bio</h3>
                <p>{this.props.user.bio}</p>
              </>
            )}
            <a
              href={this.props.user.html_url}
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Go to github profile
            </a>
            <ul>
              <li>
                <strong>Name:</strong>
                {this.props.user.name}
              </li>
              {this.props.user.company && (
                <li>
                  <strong>Work:</strong>
                  {this.props.user.company}
                </li>
              )}
              {this.props.user.blog && (
                <li>
                  <strong>Website:</strong>
                  {this.props.user.blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            Followers: {this.props.user.followers}
          </div>
          <div className="badge badge-success">
            Following:{this.props.user.following}
          </div>
          <div className="badge badge-primary">
            public_repos:{this.props.user.public_repos}
          </div>
          <div className="badge badge-dark">
            public_gists:{this.props.user.public_gists}
          </div>
        </div>
        <Repos repos={this.props.repos} />
      </div>
    );
  }
}
export default User;
