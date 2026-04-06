import useReveal from "../hooks/useReveal";
import "./Hero.css";

function Hero({ content, onNavigate }) {
  const { ref, isVisible } = useReveal();
  const heroMediaStyle = content.imageSrc
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(7, 18, 29, 0.12), rgba(7, 18, 29, 0.62)), url(${content.imageSrc})`
      }
    : undefined;

  const handlePrimaryAction = () => {
    if (content.bookingLink) {
      window.open(content.bookingLink, "_blank", "noopener,noreferrer");
      return;
    }

    onNavigate("about");
  };

  return (
    <section
      className={`hero hero-fullscreen reveal-section${isVisible ? " is-visible" : ""}`}
      id="top"
      ref={ref}
    >
      <div
        className={`hero-media${content.imageSrc ? " has-image" : " is-placeholder"}`}
        style={heroMediaStyle}
        role="img"
        aria-label={content.imageAlt}
      >
        <div className="hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">{content.eyebrow}</p>
            <h1 className="hero-name">{content.fullName}</h1>
            <p className="hero-title">{content.title}</p>
            <p className="hero-text">{content.description}</p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={handlePrimaryAction}
              >
                {content.bookingLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
