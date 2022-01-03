const About = () => {
  return (
    <div style={{ color: "#6e6565", fontFamily: "Segoe UI" }}>
      <p
        style={{
          fontSize: "60px",
          fontWeight: "bolder",
          width: "50%",
          margin: "2rem auto ",
          color: "#cecaca",
          textAlign: "center",
        }}
      >
        Where The world builds software
      </p>
      <p
        style={{
          fontSize: "30px",
          width: "60%",
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        Millions of developers and companies build, ship, and maintain their
        software on GitHub—the largest and most advanced development platform in
        the world.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "2rem auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "25px" }}>73+ million</p>
          <p>Developers</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "25px" }}>4+ million</p>
          <p>Organisations</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "25px" }}>200+ million</p>
          <p>Repositories</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "25px" }}>84%</p>
          <p>Fortune 100</p>
        </div>
      </div>
      <ul
        style={{
          display: "flex",
          width: "30%",
          margin: "1rem auto",
          color: "whitesmoke",
          listStyle: "none",
          justifyContent: "space-evenly",
        }}
      >
        Follow us on:
        <li>
          <a href="https://twitter.com/github" style={{ color: "white" }}>
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/github" style={{ color: "white" }}>
            <i className="fab fa-facebook fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://youtube.com/github" style={{ color: "white" }}>
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/github" style={{ color: "white" }}>
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default About;
