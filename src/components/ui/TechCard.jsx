const defaultIcon =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";

function TechCard({ name, icon }) {
  return (
    <li className="tech-chip">
      <img
        src={icon || defaultIcon}
        alt=""
        loading="lazy"
        width={28}
        height={28}
        onError={(e) => {
          e.currentTarget.hidden = true;
        }}
      />
      <span>{name}</span>
    </li>
  );
}

export default TechCard;
