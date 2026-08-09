import { useParams, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TechCard from "../components/ui/TechCard";

import projects from "../data/projects";
import techStack from "../data/techStack";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
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
        <div className="mb-5">
          <h1 className="mb-3">{project.title}</h1>

          <p className="lead mb-0">{project.description}</p>
        </div>

        <div className="mb-5">
          <img
            src={project.image}
            alt={project.alt}
            className="img-fluid rounded shadow"
          />
        </div>

        <section className="mb-5">
          <h2 className="h4 mb-3">Technologies</h2>

          <div className="row row-cols-2 row-cols-md-4 g-4">
            {project.technologies.map((techName, index) => {
              const tech = techStack.find((item) => item.name === techName);

              if (!tech) return null;

              return (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  delay={index * 100}
                />
              );
            })}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4 mb-3">Features</h2>

          <ul className="mb-0">
            {project.features.map((feature) => (
              <li key={feature} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {project.setupLinks && (
          <section className="mb-5">
            <h2 className="h4 mb-3">Before opening the frontend</h2>

            <p>
              Open the following services first. This may take a few moments
              while the services start:
            </p>

            <div className="d-flex flex-wrap gap-3">
              {project.setupLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="h4 mb-3">Project links</h2>

          <div className="d-flex flex-wrap gap-3">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;
