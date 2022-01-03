import React, { useEffect, useContext } from "react";
import Users from "./Users";
import Search from "./Search";
import Alert from "../Layout/Alert";
import GithubContext from "../../context/Github/GithubContext";
const AllUsers = () => {
  const { getAllUsers } = useContext(GithubContext);
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <Alert />
      <Search />
      <Users />
    </>
  );
};
export default AllUsers;
