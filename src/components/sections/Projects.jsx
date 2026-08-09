import Section from "../layout/Section";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A showcase of some of my projects."
    >
      <div className="row gy-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
