import Card from "../layout/Card";

const defaultIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";

function TechCard({ name, icon, delay = 0 }) {
  return (
    <div className="col">
      <Card aos="zoom-in" delay={delay} className="text-center">
        <img
          src={icon || defaultIcon}
          alt={name}
          className="img-fluid mb-2"
          style={{ maxHeight: "50px" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultIcon;
          }}
        />

        <h6 className="mb-0">{name}</h6>
      </Card>
    </div>
  );
}

export default TechCard;
