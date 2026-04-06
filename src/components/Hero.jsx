import useReveal from "../hooks/useReveal";

function Hero({ content, onNavigate }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`hero reveal-section${isVisible ? " is-visible" : ""}`}
      id="top"
      ref={ref}
    >
      <div className="hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="hero-text">{content.description}</p>
        <div className="hero-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => onNavigate("about")}
          >
            {content.ctaLabel}
          </button>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => onNavigate("gallery")}
          >
            {content.secondaryCtaLabel}
          </button>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile highlights">
        <p className="card-label">{content.focusLabel}</p>
        <h2>{content.focusTitle}</h2>
        <ul className="hero-facts">
          {content.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </aside>
    </section>
  );
}

export default Hero;
