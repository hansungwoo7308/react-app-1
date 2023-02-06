import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../context/AuthProvider";

const Home = () => {
  console.log(
    "\x1b[31mHome -------------------------------------------------------- "
  );
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint
    setAuth({});
    navigate("/linkpage");
  };

  return (
    <section>
      <div className="content">
        <h1>Home</h1>
        <p>You are logged in!</p>
        <div className="links">
          <h3>Directions</h3>
          <div>
            <Link to="/editor">Go to the Editor page</Link>
          </div>
          <div>
            <Link to="/admin">Go to the Admin page</Link>
          </div>
          <div>
            <Link to="/lounge">Go to the Lounge</Link>
          </div>
          <div>
            <Link to="/linkpage">Go to the link page</Link>
          </div>
        </div>
        <div className="flexGrow">
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
