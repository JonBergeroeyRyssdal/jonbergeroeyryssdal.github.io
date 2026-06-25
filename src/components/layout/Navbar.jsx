import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Jon Bergerøy Ryssdal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-lg-center text-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/#about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#education">
                Education
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#stack">
                Stack
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
