import Card from "../layout/Card";

function TechCard({ name, icon, delay = 0 }) {
  return (
    <div className="col">
      <Card className="text-center p-3" aos="fade-up" delay={delay}>
        <img
          src={icon}
          alt={name}
          className="img-fluid mb-2"
          style={{ maxHeight: "50px" }}
        />

        <h6 className="mb-0">{name}</h6>
      </Card>
    </div>
  );
}

export default TechCard;
