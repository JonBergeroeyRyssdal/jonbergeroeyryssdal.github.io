import { Link } from "react-router-dom";
import Card from "../layout/Card";

function ProjectCard({ image, title, alt, slug, delay }) {
  return (
    <div className="col-12 col-lg-4">
      <Link to={`/projects/${slug}`} className="text-decoration-none">
        <Card className="project-card" delay={delay}>
          <div className="h-100">
            <div className="position-relative">
              <img src={image} alt={alt} className="card-img-top project-img" />

              <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 w-100 text-white p-2">
                <h5 className="mb-0">{title}</h5>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default ProjectCard;
