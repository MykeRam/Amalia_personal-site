import React from "react";
import useReveal from "../hooks/useReveal";
import "./GallerySection.css";

function GallerySection({ filters, items, activeFilter, onFilterChange }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`gallery-section reveal-section${isVisible ? " is-visible" : ""}`}
      id="gallery"
      ref={ref}
    >
      <div className="section-heading section-heading-gallery">
        <div>
          <p className="eyebrow">Gallery Section</p>
          <h2>Gallery</h2>
        </div>
        <p className="section-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="gallery-toolbar" role="toolbar" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-chip${activeFilter === filter.id ? " is-selected" : ""}`}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            aria-pressed={activeFilter === filter.id}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="gallery-status" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "item" : "items"}
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <article
            key={item.id}
            className={`gallery-card gallery-card-${item.size}`}
          >
            <div className={`gallery-visual gallery-visual-${item.tone}`} aria-hidden="true">
              <span className="visual-line visual-line-one" />
              <span className="visual-line visual-line-two" />
              <span className="visual-disc" />
            </div>

            <div className="gallery-card-body">
              <p className="gallery-card-kicker">{item.categoryLabel}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="gallery-detail">{item.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;
