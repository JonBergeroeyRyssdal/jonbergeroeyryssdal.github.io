function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Jon Bergerøy Ryssdal
        </a>

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
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#stack">
                Stack
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
