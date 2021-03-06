const NavBar = (props) => {
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
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4 text-light">Home</span>
      </a>
      <hr />
      <h4 className="ms-2">Categories</h4>
      <ul className="nav nav-pills mb-auto mt-2 mx-auto">
        {props.items.map((category) => (
          <li className="border-bottom" key={category.id}>
            <a href="/" className="nav-link link-light">
              {/Entertainment:/.test(category.name) ||
              /Science:/.test(category.name)
                ? category.name.split(":")[1]
                : category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
