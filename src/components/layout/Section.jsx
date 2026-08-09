function Section({
  id,
  title,
  subtitle,
  className = "",
  rowClassName = "",
  titleAs = "h2",
  children,
}) {
  const TitleTag = titleAs;

  return (
    <section id={id} className={`py-5 ${className}`}>
      <div className="container">
        <div className="text-center">
          <TitleTag className={titleAs === "h1" ? "display-5" : ""}>
            {title}
          </TitleTag>

          {subtitle && <p className="lead">{subtitle}</p>}
        </div>

        <div className={`row gy-4 justify-content-center mt-4 ${rowClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;
