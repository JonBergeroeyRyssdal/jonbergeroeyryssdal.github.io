import Section from "../layout/Section";
import Card from "../layout/Card";
import noroffLogo from "../../assets/images/Noroff_logo.png";
import pdfLogo from "../../assets/images/PDF.svg";
function Education() {
  return (
    <Section
      id="education"
      title="Education & CV"
      subtitle="My formal education and CV:"
    >
      <div className="col-12 col-sm-6 col-lg-4 d-flex">
        <a
          href="https://www.noroff.no/studier/fagskole/backend-utvikling-2-aarig"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none w-100"
        >
          <Card className="text-center p-3 education-card" delay={100}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <img
                src={noroffLogo}
                alt="Noroff"
                className="img-fluid mb-4"
                style={{ height: "50px", width: "auto" }}
              />

              <h5 className="card-title">Backend Development</h5>

              <p className="card-text mb-0">Graduated June 2026</p>
            </div>
          </Card>
        </a>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 d-flex">
        <a
          href="/files/CV-Jon-Bergeroy-Ryssdal.pdf"
          download
          className="text-decoration-none w-100"
        >
          <Card className="text-center p-3 education-card" delay={200}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <img
                src={pdfLogo}
                alt="PDF Document"
                className="img-fluid mb-3"
                style={{ height: "60px", width: "auto" }}
              />

              <h5 className="card-title">Download CV</h5>

              <p className="card-text mb-0">PDF Document</p>
            </div>
          </Card>
        </a>
      </div>
    </Section>
  );
}

export default Education;
