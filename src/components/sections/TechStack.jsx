import { useCallback, useEffect, useRef, useState } from "react";
import Section from "../layout/Section";
import TechCard from "../ui/TechCard";
import techStack from "../../data/techStack";

function TechStack() {
  const featuredTech = techStack.filter((tech) => tech.featured);
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ previous: false, next: false });

  const updateScrollControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScroll({
      previous: track.scrollLeft > 2,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(updateScrollControls);
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [updateScrollControls]);

  function scrollTech(direction) {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth * 0.8 });
  }

  return (
    <Section
      id="stack"
      title="Tech Stack"
      subtitle="The tools I use to build reliable web applications."
    >
      <div className="col-12">
        <div className="tech-strip">
          <button type="button" className="carousel-arrow" aria-label="Previous technologies" aria-controls="tech-strip-track" disabled={!canScroll.previous} onClick={() => scrollTech(-1)}>
            <span aria-hidden="true">←</span>
          </button>
          <ul
            id="tech-strip-track"
            className="tech-strip-track"
            ref={trackRef}
            tabIndex={0}
            aria-label="Tech stack. Scroll horizontally to see more technologies."
            onScroll={updateScrollControls}
          >
            {featuredTech.map((tech) => (
              <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </ul>
          <button type="button" className="carousel-arrow" aria-label="Next technologies" aria-controls="tech-strip-track" disabled={!canScroll.next} onClick={() => scrollTech(1)}>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="tech-strip-hint">Scroll or swipe to explore the stack</p>
      </div>
    </Section>
  );
}

export default TechStack;
