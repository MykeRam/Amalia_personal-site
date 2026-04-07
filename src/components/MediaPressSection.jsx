import React from "react";
import useReveal from "../hooks/useReveal";
import "./MediaPressSection.css";

function MediaPressSection({ content }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`media-press-section reveal-section${isVisible ? " is-visible" : ""}`}
      id="media-press"
      ref={ref}
    >
      <div className="section-heading">
        <h2>{content.title}</h2>
      </div>

      <div className="media-press-layout">
        <div className="media-press-copy">
          <p>{content.description}</p>
        </div>

        <div className="media-press-list-wrap" aria-label="Media and press links">
          <ol className="media-press-list">
            {content.items.map((item) => (
              <li key={item.href} className="media-press-item">
                <a
                  className="media-press-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="media-press-item-source">{item.source}</span>
                  <span className="media-press-item-title">{item.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default MediaPressSection;
