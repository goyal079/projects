const NavBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-success"
      style={{ width: " 220px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkhref="#bootstrap" />
        </svg>
        <span className="fs-4 text-light">Home</span>
      </a>
      <hr />
      <h4 className="ms-2">Categories</h4>
      <ul className="nav nav-pills mb-auto mt-2 mx-auto">
        <li className="border-bottom">
          <a href="/" className="nav-link link-light">
            Dashboard
          </a>
        </li>
        <li className="border-bottom">
          <a href="/" className="nav-link link-light">
            Orders
          </a>
        </li>
        <li className="border-bottom">
          <a href="/" className="nav-link link-light">
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
