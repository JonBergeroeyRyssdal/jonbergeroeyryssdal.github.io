import headerImage from "../../assets/images/Header_image.png";

function Hero() {
  return (
    <header
      className="hero d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3">Jon Bergerøy Ryssdal</h1>

        <h2 className="fw-light mb-4">Backend Developer</h2>

        <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
          Backend-focused web developer specializing in ASP.NET Core, C#, SQL
          and REST APIs. Passionate about building reliable and maintainable
          systems.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-dark">
            View Projects
          </a>

          <a
            href="/files/CV-Jon-Bergeroy-Ryssdal.pdf"
            download
            className="btn btn-outline-light"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
