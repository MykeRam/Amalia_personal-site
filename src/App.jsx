import React from "react";
import { useEffect, useState } from "react";
import { sections, heroContent, aboutContent, calendlyContent } from "./siteContent";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CalendlySection from "./components/CalendlySection";
import SiteFooter from "./components/SiteFooter";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observedSections = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: [0.25, 0.45, 0.7]
      }
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const sectionOffsets = {
      about: 24
    };
    const headerOffset = sectionOffsets[sectionId] ?? 88;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };

  return (
    <div className="page-shell">
      <SiteHeader
        sections={sections}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main>
        <Hero content={heroContent} onNavigate={handleNavigate} />
        <AboutSection content={aboutContent} />
        <CalendlySection content={calendlyContent} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
