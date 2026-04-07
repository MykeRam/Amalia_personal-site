import React from "react";
import { useEffect, useState } from "react";
import {
  sections,
  heroContent,
  aboutCards,
  galleryFilters,
  galleryItems
} from "./siteContent";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import SiteFooter from "./components/SiteFooter";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [activeFilter, setActiveFilter] = useState("all");

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

    const headerOffset = 88;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };

  const visibleGalleryItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="page-shell">
      <SiteHeader
        sections={sections}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main>
        <Hero content={heroContent} onNavigate={handleNavigate} />
        <AboutSection cards={aboutCards} />
        <GallerySection
          filters={galleryFilters}
          items={visibleGalleryItems}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
