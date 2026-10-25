import Section from "../layout/Section";
import TechCard from "../ui/TechCard";
import techStack from "../../data/techStack";

function TechStack() {
  const featuredTech = techStack.filter((tech) => tech.featured);

  return (
    <Section
      id="stack"
      title="Tech Stack"
      subtitle="The tools I use to build reliable web applications."
    >
      <div className="col-12">
        <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
          {featuredTech.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default TechStack;
