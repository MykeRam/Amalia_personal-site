import React, { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";
import "./Hero.css";

function Hero({ content, onNavigate }) {
  const { ref, isVisible } = useReveal();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const hasVideos = Array.isArray(content.videoSources) && content.videoSources.length > 0;
  const videoRefs = useRef([]);
  const heroMediaStyle = content.posterSrc
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(7, 18, 29, 0.12), rgba(7, 18, 29, 0.62)), url(${content.posterSrc})`
      }
    : undefined;

  useEffect(() => {
    if (!hasVideos) {
      return;
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index === activeVideoIndex) {
        video.currentTime = 0;
        const playPromise = video.play();

        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, [activeVideoIndex, hasVideos]);

  const handlePrimaryAction = () => {
    if (content.bookingLink) {
      window.open(content.bookingLink, "_blank", "noopener,noreferrer");
      return;
    }

    onNavigate("calendar");
  };

  const handleVideoEnded = () => {
    if (!hasVideos || content.videoSources.length < 2) {
      return;
    }

    setActiveVideoIndex((currentIndex) => (currentIndex + 1) % content.videoSources.length);
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
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                className={`hero-video${index === activeVideoIndex ? " is-active" : ""}`}
                muted
                playsInline
                preload="metadata"
                loop={content.videoSources.length === 1}
                onEnded={index === activeVideoIndex ? handleVideoEnded : undefined}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ))}
          </div>
        ) : null}

        <div className="hero-overlay">
          <div className="hero-copy">
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
