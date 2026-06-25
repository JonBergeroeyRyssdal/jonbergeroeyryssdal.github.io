import Section from "../layout/Section";
import TechCard from "../ui/TechCard";
import techStack from "../../data/techStack";

function TechStack() {
  return (
    <Section
      id="stack"
      title="Tech Stack"
      subtitle="I have worked with the following technologies:"
    >
      <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center mt-4">
        {techStack.map((tech, index) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            delay={index * 100}
          />
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
