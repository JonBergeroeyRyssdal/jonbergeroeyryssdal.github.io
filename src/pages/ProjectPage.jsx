import { useParams, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="container py-5 text-center">
          <h1>Project not found</h1>
          <p>The requested project does not exist.</p>

          <Link to="/" className="btn btn-dark mt-3">
            Back to portfolio
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="mb-4">{project.title}</h1>

        <img
          src={project.image}
          alt={project.alt}
          className="img-fluid rounded shadow mb-4"
        />

        <p className="lead">{project.description}</p>

        <section className="mt-4">
          <h2 className="h4">Technologies</h2>

          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge text-bg-dark">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h2 className="h4">Features</h2>

          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <div className="mt-4 d-flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              GitHub
            </a>
          )}

          {project.frontend && (
            <a
              href={project.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Frontend
            </a>
          )}

          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              Backend
            </a>
          )}

          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;
