import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import * as bootstrap from "bootstrap";

function Navbar() {
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeNavbar = () => {
    if (window.innerWidth < 992 && navbarRef.current) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(
        navbarRef.current,
      );
      collapse.hide();
    }
  };

  const scrollToSection = (sectionId) => {
    closeNavbar();

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth >= 992 ||
        !navbarRef.current ||
        !navbarRef.current.classList.contains("show")
      ) {
        return;
      }

      const toggler = document.querySelector(".navbar-toggler");

      if (
        !navbarRef.current.contains(event.target) &&
        toggler &&
        !toggler.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
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
          ref={navbarRef}
          className="collapse navbar-collapse justify-content-lg-center text-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#about" onClick={closeNavbar}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#education" onClick={closeNavbar}>
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#stack" onClick={closeNavbar}>
                Stack
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#projects" onClick={closeNavbar}>
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#contact" onClick={closeNavbar}>
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
