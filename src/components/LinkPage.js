import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section>
      <div className="content">
        <h1>Links</h1>
        <br />
        <h3>Public</h3>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <br />
        <h3>Private</h3>
        <Link to="/">Home</Link>
        <Link to="/editor">Editors Page</Link>
        <Link to="/admin">Admin Page</Link>
      </div>
    </section>
  );
};

export default LinkPage;
