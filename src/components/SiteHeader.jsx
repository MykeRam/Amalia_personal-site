import React from "react";
import "./SiteHeader.css";

function SiteHeader({ sections, activeSection, onNavigate }) {
  return (
    <header className="site-header">
      <button
        className="brand"
        type="button"
        onClick={() => onNavigate("top")}
        aria-label="Amalia home"
      >
        <span className="brand-mark">A</span>
        <span className="brand-text">Amalia</span>
      </button>

      <nav className="site-nav" aria-label="Primary navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`site-nav-link${activeSection === section.id ? " is-active" : ""}`}
            type="button"
            onClick={() => onNavigate(section.id)}
            aria-current={activeSection === section.id ? "page" : undefined}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <button className="login-button" type="button">
        Log In
      </button>
    </header>
  );
}

export default SiteHeader;
