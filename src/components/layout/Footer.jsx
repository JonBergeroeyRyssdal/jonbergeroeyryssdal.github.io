import { Link, useLocation } from "react-router-dom";
import contactLinks from "../../data/contact";

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-5">
            <p className="mb-1 fw-semibold">Jon Bergerøy Ryssdal</p>

            <p className="footer-description">Backend Developer · Moss, Norway</p>
          </div>
          <div className="col-12 col-sm-7 col-md-4">
            <h2 className="footer-heading">Get in touch</h2>
            <address className="mb-0">
              <ul className="footer-links">
                {contactLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.href.startsWith("mailto:") ? item.href.slice(7) : item.name}
                      {item.external && <span aria-hidden="true"> ↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>
          <div className="col-12 col-sm-5 col-md-3">
            <nav aria-label="Footer navigation">
              <h2 className="footer-heading">Explore</h2>
              <ul className="footer-links">
                <li><Link to="/#projects">Projects</Link></li>
                <li><Link to="/#about">About me</Link></li>
                <li><a href="/files/CV 2026 English.pdf" download>Download CV</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Jon Bergerøy Ryssdal</small>
          {pathname !== "/" && (
            <Link to="/" className="footer-home-link">Back to home <span aria-hidden="true">↑</span></Link>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
