import { Link } from "react-router-dom";
import Card from "../layout/Card";

function ProjectCard({ image, title, alt, slug, delay, technologies, summary, className = "col-12 col-md-6 d-flex" }) {
  return (
    <div className={className}>
      <Link to={`/projects/${slug}`} className="text-decoration-none w-100">
        <Card className="project-card" delay={delay}>
          <div className="project-card-content h-100 d-flex flex-column">
            <div className="project-card-image position-relative">
              <img src={image} alt={alt} loading="lazy" className="card-img-top project-img" />
            </div>
            <div className="card-body d-flex flex-column flex-grow-1">
              <h3 className="h4 card-title">{title}</h3>
              <p>{summary}</p>
              <ul className="list-unstyled d-flex flex-wrap gap-2 mb-4" aria-label="Key technologies">
                {technologies.slice(0, 4).map((tech) => (
                  <li key={tech} className="badge rounded-pill text-bg-light border">{tech}</li>
                ))}
              </ul>
              <span className="fw-semibold mt-auto">View project <span aria-hidden="true">→</span></span>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default ProjectCard;
