import { useRef, useState } from "react";
import Section from "../layout/Section";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects";

function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goToProject(index) {
    const track = trackRef.current;
    const nextIndex = (index + projects.length) % projects.length;
    track.scrollTo({ left: nextIndex * track.clientWidth });
  }

  function handleKeyDown(event) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      goToProject(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  }

  return (
    <Section
      id="projects"
      title="Selected projects"
      subtitle="From databases and APIs to the interfaces that bring them to life."
    >
      <div className="col-12">
        <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects">
          <div
            id="project-carousel-track"
            className="project-carousel-track"
            ref={trackRef}
            tabIndex={0}
            aria-label="Projects. Use the left and right arrow keys to browse."
            onKeyDown={handleKeyDown}
            onScroll={(event) => {
              const track = event.currentTarget;
              setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="project-carousel-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
              >
                <ProjectCard {...project} className="project-carousel-card d-flex" />
              </div>
            ))}
          </div>
          <div className="project-carousel-controls">
            <button type="button" className="carousel-arrow" aria-label="Previous project" aria-controls="project-carousel-track" onClick={() => goToProject(activeIndex - 1)}>
              <span aria-hidden="true">←</span>
            </button>
            <div className="project-carousel-dots" role="group" aria-label="Choose project">
              {projects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  className="carousel-dot"
                  aria-label={`Show ${project.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-controls="project-carousel-track"
                  onClick={() => goToProject(index)}
                />
              ))}
            </div>
            <button type="button" className="carousel-arrow" aria-label="Next project" aria-controls="project-carousel-track" onClick={() => goToProject(activeIndex + 1)}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="project-carousel-count" aria-live="polite" aria-atomic="true">
            Project {activeIndex + 1} of {projects.length}
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
