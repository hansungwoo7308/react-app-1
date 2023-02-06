import { Link } from "react-router-dom";

import Users from "./Users";

const Admin = () => {
  console.log(
    "\x1b[31mAdmin -------------------------------------------------------- "
  );
  return (
    <section>
      <div className="content" style={{ border: "1px solid green" }}>
        <h1>Admins Page</h1>
        <br />
        <Users />
        <br />
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Admin;
