import React, { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import "./Hero.css";

function Hero({ content, onNavigate }) {
  const { ref, isVisible } = useReveal();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const hasVideos = Array.isArray(content.videoSources) && content.videoSources.length > 0;
  const heroMediaStyle = content.posterSrc
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(7, 18, 29, 0.12), rgba(7, 18, 29, 0.62)), url(${content.posterSrc})`
      }
    : undefined;

  useEffect(() => {
    if (!hasVideos || content.videoSources.length < 2) {
      return undefined;
    }

    const rotationMs = content.videoRotateMs ?? 7000;
    const intervalId = window.setInterval(() => {
      setActiveVideoIndex((currentIndex) => (currentIndex + 1) % content.videoSources.length);
    }, rotationMs);

    return () => window.clearInterval(intervalId);
  }, [content.videoRotateMs, content.videoSources, hasVideos]);

  const handlePrimaryAction = () => {
    if (content.bookingLink) {
      window.open(content.bookingLink, "_blank", "noopener,noreferrer");
      return;
    }

    onNavigate("about");
  };

  return (
    <section
      className={`hero hero-fullscreen reveal-section${isVisible ? " is-visible" : ""}`}
      id="top"
      ref={ref}
    >
      <div
        className={`hero-media${
          hasVideos ? " has-video" : content.posterSrc ? " has-poster" : " is-placeholder"
        }`}
        style={heroMediaStyle}
        role="img"
        aria-label={content.imageAlt}
      >
        {hasVideos ? (
          <div className="hero-video-stack" aria-hidden="true">
            {content.videoSources.map((videoSrc, index) => (
              <video
                key={videoSrc}
                className={`hero-video${index === activeVideoIndex ? " is-active" : ""}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ))}
          </div>
        ) : null}

        <div className="hero-overlay">
          <div className="hero-copy">
            {content.portraitSrc ? (
              <img
                className="hero-portrait"
                src={content.portraitSrc}
                alt={content.portraitAlt}
              />
            ) : null}
            <p className="eyebrow hero-eyebrow">{content.eyebrow}</p>
            <h1 className="hero-name">{content.fullName}</h1>
            <p className="hero-title">{content.title}</p>
            <p className="hero-text">{content.description}</p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={handlePrimaryAction}
              >
                {content.bookingLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
