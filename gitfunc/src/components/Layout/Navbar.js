import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#161B22" }}>
      <Link to="/githubProject">
        <h1>
          <i className={props.logo}></i>
          {props.appName}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/githubProject">Home</Link>
        </li>
        <li>
          <Link to="/githubProject/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
