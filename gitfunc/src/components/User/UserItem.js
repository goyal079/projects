import { Link } from "react-router-dom";
const UserItem = (props) => {
  return (
    <div className="card text-center" style={{backgroundColor:"#161B22", border:"1px solid", borderRadius:"3px"}}>
      <img
        src={props.user.avatar_url}
        style={{ width: "150px" }}
        alt="User Img"
        className="round-img"
      />
      <h3 style={{color:"white"}}>{props.user.login}</h3>
      <div>
        <Link
          to={`/user/${props.user.login}`}
          className="btn btn-dark btn-sm my-1"
        >
          Github Profile
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
