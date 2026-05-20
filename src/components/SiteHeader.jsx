import React from "react";
import "./SiteHeader.css";

function SiteHeader({ sections, activeSection, onNavigate, onStudentLoginClick, isStudentLoginOpen }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
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

        <button
          className="login-button"
          type="button"
          onClick={onStudentLoginClick}
          aria-haspopup="dialog"
          aria-expanded={isStudentLoginOpen ? "true" : "false"}
        >
          Student Log In
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
