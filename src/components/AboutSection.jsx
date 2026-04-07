import React from "react";
import useReveal from "../hooks/useReveal";
import "./AboutSection.css";

function AboutSection({ content }) {
  const { ref, isVisible } = useReveal();
  const linkedinIconSrc = `${import.meta.env.BASE_URL}assets/linkedin-logo.svg`;

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
        <div className="about-portrait-column">
          <figure className="about-portrait-wrap">
            <img
              className="about-portrait"
              src={content.imageSrc}
              alt={content.imageAlt}
            />
          </figure>

          <a
            className="about-linkedin"
            href={content.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Amalia LinkedIn profile"
          >
            <img
              className="about-linkedin-icon"
              src={linkedinIconSrc}
              alt=""
            />
          </a>
        </div>

        <article className="about-copy">
          {content.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={`paragraph-${paragraphIndex}`}>
              {typeof paragraph === "string"
                ? paragraph
                : paragraph.segments.map((segment, segmentIndex) =>
                    typeof segment === "string" ? (
                      <React.Fragment key={`segment-${segmentIndex}`}>
                        {segment}
                      </React.Fragment>
                    ) : (
                      <a
                        key={`segment-${segmentIndex}`}
                        className="about-inline-link"
                        href={segment.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {segment.text}
                      </a>
                    )
                  )}
            </p>
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
