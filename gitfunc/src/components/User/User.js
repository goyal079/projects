import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Layout/Spinner";
import { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";
import GithubContext from "../../context/Github/GithubContext";
const User = (props) => {
  const { user, repos, getUserInfo, loading, resetUserInfo } =
    useContext(GithubContext);
  const Info = {
    marginTop: "0.5rem",
  };
  const { alert } = useContext(AlertContext);
  useEffect(() => {
    getUserInfo(props.match.params.id);
    return () => {
      resetUserInfo();
    };
  }, []);
  if (alert) {
    return <Redirect to="/" />;
  }
  return loading ? (
    <Spinner />
  ) : (
    <div style={{ color: "white" }}>
      <Link to="/" className="btn btn-light">
        Back to Home
      </Link>
      {"    "}
      Hireable:
      {user.hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div
        className="card grid-2"
        style={{
          border: "1px solid #585858",
        }}
      >
        <div className="all-center">
          <img
            src={user.avatar_url}
            className="round-img"
            alt={user.login}
            style={{ width: "200px" }}
          />
          <h2>{user.login}</h2>
          {user.location && <p>Location : {user.location}</p>}
        </div>
        <div style={{ paddingTop: "2rem" }}>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}

          <ul>
            <li style={Info}>
              <strong>Name: </strong>
              {user.name}
            </li>
            {user.company && (
              <li style={Info}>
                <strong>Work: </strong>
                {user.company}
              </li>
            )}
            {user.blog && (
              <li style={Info}>
                <strong>Website: </strong>
                {user.blog}
              </li>
            )}
          </ul>
          <a
            href={user.html_url}
            className="btn btn-dark"
            target="_blank"
            rel="noreferrer"
            style={Info}
          >
            Go to github profile
          </a>
        </div>
      </div>
      <div
        className="card text-center"
        style={{
          border: "1px solid #585858",
        }}
      >
        <div className="badge badge-primary">Followers: {user.followers}</div>
        <div className="badge badge-success">Following:{user.following}</div>
        <div className="badge badge-primary">
          public_repos:{user.public_repos}
        </div>
        <div className="badge badge-dark">public_gists:{user.public_gists}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};
export default User;
