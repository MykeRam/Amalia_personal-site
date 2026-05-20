import React from "react";
import "./StudentDashboard.css";

function StudentDashboard({ email, onSignOut }) {
  return (
    <main className="student-dashboard-page">
      <section className="student-dashboard-shell">
        <div className="student-dashboard-topbar">
          <div>
            <p className="student-dashboard-eyebrow">Protected Area</p>
            <h1>Student Dashboard</h1>
          </div>

          <button className="student-dashboard-signout" type="button" onClick={onSignOut}>
            Sign out
          </button>
        </div>

        <div className="student-dashboard-hero">
          <div className="student-dashboard-hero-copy">
            <p className="student-dashboard-label">Signed in as</p>
            <p className="student-dashboard-email">{email}</p>
            <p className="student-dashboard-description">
              This area is only available to approved student emails. It will hold the study
              guide library, category checklists, and future student resources.
            </p>
          </div>

          <div className="student-dashboard-stat">
            <span className="student-dashboard-stat-number">3</span>
            <span className="student-dashboard-stat-label">study areas planned</span>
          </div>
        </div>

        <div className="student-dashboard-grid">
          <article className="student-dashboard-card">
            <p className="student-dashboard-card-label">Next up</p>
            <h2>Study guide library</h2>
            <p>
              Placeholder space for private checklists, lesson guides, and reference materials.
            </p>
          </article>

          <article className="student-dashboard-card">
            <p className="student-dashboard-card-label">Focus</p>
            <h2>Category tracking</h2>
            <p>
              Students will eventually select what they&apos;re working on so the dashboard can
              surface the most relevant material.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default StudentDashboard;
