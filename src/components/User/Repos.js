import React from "react";
class RepoItem extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.html_url} target="_blank" rel="noreferrer">
          {this.props.name}
        </a>
      </div>
    );
  }
}
class Repos extends React.Component {
  render() {
    return this.props.repos.map((repo) => {
      return <RepoItem name={repo.name} html_url={repo.html_url} />;
    });
  }
}

export default Repos;
