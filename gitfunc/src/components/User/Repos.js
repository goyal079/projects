import React, { useState } from "react";
const RepoItem = (props) => {
  const [link, setLink] = useState(false);
  return (
    <div
      className="card"
      style={{
        borderRadius: "3px",
        border: "1px solid #585858",
        backgroundColor: "#161b22",
      }}
    >
      <a
        href={props.html_url}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#58a6FF",
          textDecoration: link ? "underline" : "none",
        }}
        onMouseEnter={() => {
          setLink(true);
        }}
        onMouseLeave={() => {
          setLink(false);
        }}
      >
        {props.name}
      </a>
    </div>
  );
};

const Repos = (props) => {
  return props.repos.map((repo) => {
    return <RepoItem name={repo.name} html_url={repo.html_url} key={repo.id} />;
  });
};
export default Repos;
