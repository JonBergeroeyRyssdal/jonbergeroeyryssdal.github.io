import { useParams, Link } from "react-router-dom";
import ProjectNavbar from "../components/layout/ProjectNavbar";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <ProjectNavbar />
        <main className="container py-5 text-center">
          <h1>Project not found</h1>
          <p>The requested project does not exist.</p>
          <Link to="/" className="btn btn-dark mt-3">Back to portfolio</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ProjectNavbar />
      <main>
        <Section id="project-overview" title={project.title} subtitle={project.description} titleAs="h1">
          <div className="col-12 text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {project.frontend && (
                <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="btn btn-dark">{project.frontendLabel || "Live demo"}</a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">GitHub</a>
              )}
              {project.backend && (
                <a href={project.backend} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  {project.backend.endsWith("/doc") ? "API docs" : "Backend API"}
                </a>
              )}
            </div>
            {project.setupLinks && (
              <details className="mt-4">
                <summary>Demo taking a while to load?</summary>
                <p className="text-muted mt-3">The services may need a moment to wake up. Open these services, then try the demo again.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {project.setupLinks.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">{link.label}</a>
                  ))}
                </div>
              </details>
            )}
            <img src={project.image} alt={project.alt} className="img-fluid rounded shadow mt-5" />
          </div>
        </Section>
        <Section id="technologies" title="Technologies">
          <div className="col-12">
            <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="badge rounded-pill text-bg-light border p-3">{tech}</li>
              ))}
            </ul>
          </div>
        </Section>
        <Section id="features" title="Features">
          <div className="col-12">
            <ul className="project-features">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default ProjectPage;
