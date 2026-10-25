import Section from "../layout/Section";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      subtitle="From databases and APIs to the interfaces that bring them to life."
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Section>
  );
}

export default Projects;
