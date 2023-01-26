import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <section>
      <div className="content">
        <h1>Editors Page</h1>
        <br />
        <p>You must have been assigned an Editor role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Editor;
