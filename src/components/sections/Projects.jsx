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
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Section>
  );
}

export default Projects;
