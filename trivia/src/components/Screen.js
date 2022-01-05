import { Link } from "react-router-dom";
const Screen = () => {
  return (
    <div
      className="card mx-auto my-auto"
      style={{ width: "70%", height: "400px" }}
    >
      <h3 className="card-header">Quiz?</h3>
      <h4 className="card-title ms-4 mt-3">Choose your level.</h4>
      <div className="card-body d-md-flex justify-content-evenly p-4">
        <div className="card m-sm-3 mb-md-5">
          <div className="card-body">
            <h5 className="card-title">Novice!?</h5>
            <Link to="/quiz">
              <div className="btn btn-primary w-75">Take the Quiz!</div>
            </Link>
          </div>
        </div>
        <div className="card m-sm-3 mb-md-5">
          <div className="card-body">
            <h5 className="card-title">Standard?!</h5>
            {/* <Link> */}
            <div className="btn btn-primary w-75">Take the Quiz!</div>
            {/* </Link> */}
          </div>
        </div>
        <div className="card m-sm-3 mb-md-5">
          <div className="card-body">
            <h5 className="card-title">Genius?!</h5>
            {/* <Link> */}
            <div className="btn btn-primary w-75">Take the Quiz!</div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Screen;
