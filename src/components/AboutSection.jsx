import React from "react";
import useReveal from "../hooks/useReveal";
import "./AboutSection.css";

function AboutSection({ content }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`about-section reveal-section${isVisible ? " is-visible" : ""}`}
      id="about"
      ref={ref}
    >
      <div className="section-heading">
        <h2>About</h2>
      </div>

      <div className="about-layout">
        <figure className="about-portrait-wrap">
          <img
            className="about-portrait"
            src={content.imageSrc}
            alt={content.imageAlt}
          />
        </figure>

        <article className="about-copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="about-qualifications">
            <h3>Qualifications</h3>
            <ul className="about-qualification-list">
              {content.qualifications.map((qualification) => (
                <li key={qualification}>{qualification}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
