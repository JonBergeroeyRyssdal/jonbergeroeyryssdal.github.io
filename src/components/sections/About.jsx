import portrett from "../../assets/images/Portrett.webp";
import about from "../../data/about";

import Section from "../layout/Section";
import Card from "../layout/Card";

function About() {
  return (
    <Section id="about" title="About">
      <div className="col-12 col-lg-6 d-flex">
        <Card className="portrait-card">
          <img
            src={portrett}
            loading="lazy"
            alt={about.imageAlt}
            className="img-fluid rounded"
          />
        </Card>
      </div>

      <div className="col-12 col-lg-6 d-flex">
        <Card aos="fade-up-right" className="about-copy">
          <div className="card-body d-flex flex-column justify-content-center">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

export default About;
