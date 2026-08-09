import { Link } from "react-router-dom";

function ProjectNavbar() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jon Bergerøy Ryssdal
        </Link>
      </div>
    </nav>
  );
}

export default ProjectNavbar;
