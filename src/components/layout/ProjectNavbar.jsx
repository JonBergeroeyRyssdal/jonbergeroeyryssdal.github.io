import { Link } from "react-router-dom";

function ProjectNavbar() {
  return (
    <nav aria-label="Project navigation" className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jon Bergerøy Ryssdal
        </Link>
        <Link className="nav-link" to="/#projects">
          Back to projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </nav>
  );
}

export default ProjectNavbar;
