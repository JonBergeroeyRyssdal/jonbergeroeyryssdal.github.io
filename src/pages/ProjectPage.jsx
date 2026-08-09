import { useParams, Link } from "react-router-dom";

import ProjectNavbar from "../components/layout/ProjectNavbar";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import TechCard from "../components/ui/TechCard";

import projects from "../data/projects";
import techStack from "../data/techStack";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <ProjectNavbar />

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
      <ProjectNavbar />

      <main>
        <Section
          id="project-overview"
          title={project.title}
          subtitle={project.description}
          titleAs="h1"
        >
          <div className="col-12 text-center">
            <img
              src={project.image}
              alt={project.alt}
              className="img-fluid rounded shadow"
            />
          </div>
        </Section>

        <Section
          id="technologies"
          title="Technologies"
          rowClassName="row-cols-2 row-cols-md-4"
        >
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
        </Section>

        <Section id="features" title="Features">
          <div className="col-12 text-center">
            <ul className="list-unstyled mb-0">
              {project.features.map((feature) => (
                <li key={feature} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {project.setupLinks && (
          <Section
            id="setup"
            title="Before opening the frontend"
            subtitle="Open the following services first. This may take a few moments while the services start:"
          >
            <div className="col-12">
              <div className="d-flex flex-wrap justify-content-center gap-3">
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
            </div>
          </Section>
        )}

        <Section
          id="project-links"
          title="Project links"
          className="border-bottom-0"
        >
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-3">
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
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default ProjectPage;
