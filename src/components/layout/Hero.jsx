import headerImage from "../../assets/images/Header_image.webp";

function Hero() {
  return (
    <header
      className="hero d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="container text-center">
        <p className="hero-eyebrow">Moss, Norway / Web development</p>
        <h1 className="display-3 fw-bold mb-3">Jon Bergerøy Ryssdal</h1>

        <p className="hero-role mb-4">Backend Developer</p>

        <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
          Backend-focused web developer building full-stack applications and
          REST APIs using C#, ASP.NET Core, JavaScript, TypeScript, Node.js and
          SQL.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#projects" className="btn btn-dark">
            View Projects
          </a>

          <a
            href="/files/CV 2026 English.pdf"
            download
            className="btn btn-outline-light"
          >
            Download CV
          </a>
        </div>
        <div className="hero-stack" aria-label="Core technologies">
          <span>C# & .NET</span><span>Node.js</span><span>React</span><span>SQL</span>
        </div>
      </div>
    </header>
  );
}

export default Hero;
