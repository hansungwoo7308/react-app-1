import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section>
      <div className="content">
        <h1>Admins Page</h1>
        <br />
        <p>You must have been assigned an Admin role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Admin;
