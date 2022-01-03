import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../context/Github/GithubContext";
import { useContext } from "react";
const Users = (props) => {
  const { loading, users } = useContext(GithubContext);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} loading={props.loading} />
      ))}
    </div>
  );
};
export default Users;
