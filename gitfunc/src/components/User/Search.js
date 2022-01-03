import React, { useState, useContext } from "react";
import GithubContext from "../../context/Github/GithubContext";
import AlertContext from "../../context/Alert/AlertContext";
const Search = () => {
  const { searchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("danger", "Enter a valid search String");
    } else {
      searchUsers(text);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          style={{ borderRadius: "3px" }}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          style={{ borderRadius: "3px" }}
        />
      </form>
    </div>
  );
};
export default Search;
