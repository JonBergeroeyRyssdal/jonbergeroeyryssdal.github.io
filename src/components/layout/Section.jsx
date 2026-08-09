function Section({ id, title, subtitle, className = "", children }) {
  return (
    <section
      id={id}
      data-aos="fade-up"
      className={`container p-4 border-bottom ${className}`}
    >
      <h2 className="text-center pt-5">{title}</h2>

      {subtitle && <p className="text-center mb-4">{subtitle}</p>}

      <div className="row gy-4 justify-content-center mt-4">{children}</div>
    </section>
  );
}

export default Section;
