import Section from "../layout/Section";
import Card from "../layout/Card";
import contactLinks from "../../data/contact";

function Contact() {
  return (
    <Section id="contact" title="Contact">
      {contactLinks.map((item) => (
        <div
          key={item.name}
          className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="text-decoration-none w-100"
          >
            <Card className="contact-card text-center p-3" delay={item.delay}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="img-fluid bg-white p-1 rounded mb-2"
                  style={{
                    maxWidth: "60px",
                    filter: item.grayscale ? "grayscale(100%)" : undefined,
                  }}
                />

                <h5 className="card-title mb-0 fw-bold">{item.name}</h5>
              </div>
            </Card>
          </a>
        </div>
      ))}
    </Section>
  );
}

export default Contact;
