import useReveal from "../hooks/useReveal";
import "./AboutSection.css";

function AboutSection({ cards }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`about-section reveal-section${isVisible ? " is-visible" : ""}`}
      id="about"
      ref={ref}
    >
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>A strong foundation for her story.</h2>
      </div>

      <div className="about-grid">
        {cards.map((card) => (
          <article
            key={card.title ?? "about-intro"}
            className={`about-panel${card.featured ? " about-panel-primary" : ""}`}
          >
            {card.title ? <h3>{card.title}</h3> : null}
            {card.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
