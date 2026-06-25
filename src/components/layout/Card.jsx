// components/layout/Card.jsx

function Card({ children, className = "", aos = "zoom-in", delay = "100" }) {
  return (
    <div
      className={`card border-0 shadow-sm p-4 h-100 w-100 ${className}`}
      data-aos={aos}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
}

export default Card;
