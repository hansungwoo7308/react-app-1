import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import axios from "../api/axios";
// import useRefreshToken from "../hooks/useRefreshToken";
// import useAuth from "../hooks/useAuth";

const Users = () => {
  console.log("\x1b[31mUsers Component");
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  // const refresh = useRefreshToken();
  // const { auth } = useAuth();

  useEffect(() => {
    const controller = new AbortController(); // it is pure javascript method that cancel our axios request.
    const getUsers = async () => {
      try {
        console.log("Users  localhost:3500/users");
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        console.log(
          "Users  localhost:3500/users  response.data : ",
          response.data
        );
        setUsers(response.data);
      } catch (err) {
        console.log("Users  localhost:3500/users  error : ", err);
        navigate("/login", { state: { from: location }, replace: true });
        // for saving the current location, "from: location" was used.
      }
    };
    getUsers();
    // useEffect cleanup function
    return () => controller.abort();
  }, []);

  return (
    <article style={{ border: "1px solid green" }}>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
      {/* <button onClick={() => refresh()}>Refresh</button> */}
      {/* <br /> */}
    </article>
  );
};

export default Users;
