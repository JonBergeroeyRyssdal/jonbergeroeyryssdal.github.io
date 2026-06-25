import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import Card from "../components/layout/Card";

import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <Navbar />

      <Section
        id="project-details"
        title={project.title}
        className="border-bottom-0"
      >
        <div className="col-12">
          <Card aos="fade-up" delay="100">
            <img
              src={project.image}
              alt={project.alt}
              className="img-fluid rounded"
            />
          </Card>
        </div>

        <div className="col-12 col-lg-6 d-flex">
          <Card aos="fade-up" delay="150">
            <h3 className="h4 mb-3">Overview</h3>

            <p className="mb-0">{project.description}</p>
          </Card>
        </div>

        <div className="col-12 col-lg-6 d-flex">
          <Card aos="fade-up" delay="200">
            <h3 className="h4 mb-3">Tech Stack</h3>

            <div className="d-flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge text-bg-dark">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-12 col-lg-6 d-flex">
          <Card aos="fade-up" delay="250">
            <h3 className="h4 mb-3">Key Features</h3>

            <ul className="mb-0">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="col-12 col-lg-6 d-flex">
          <Card aos="fade-up" delay="300">
            <h3 className="h4 mb-3">Links</h3>

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
          </Card>
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default ProjectPage;
