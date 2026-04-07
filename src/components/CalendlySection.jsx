import React from "react";
import useReveal from "../hooks/useReveal";
import "./CalendlySection.css";

function CalendlySection({ content }) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      className={`calendly-section reveal-section${isVisible ? " is-visible" : ""}`}
      id="calendar"
      ref={ref}
    >
      <div className="section-heading">
        <h2>{content.title}</h2>
      </div>

      <div className="calendly-layout">
        <div className="calendly-copy">
          <p>{content.description}</p>
        </div>

        <div className="calendly-placeholder" aria-label="Reserved Calendly embed space">
          <div className="calendly-placeholder-inner">
            <span className="calendly-chip">{content.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendlySection;
