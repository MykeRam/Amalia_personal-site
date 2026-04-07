# Amalia Personal Site

A single-page React website for Amalia Andaverde, designed as a professional aviation-focused personal brand site. The current experience features a full-screen video hero, an About section, a booking area reserved for Calendly, and a Media & Press section for interviews and coverage.

## Current Experience

- Full-screen hero with background video playback
- About section with portrait, biography, and qualifications
- Booking section reserved for a future Calendly integration
- Media & Press section with featured interviews and coverage
- Sticky header navigation with smooth scrolling and active-section state

## Planned Student Features

- Student log in and sign up experience
- Protected student area for study resources
- Dedicated study guide library available after account creation and sign-in
- Selectable study-category checkboxes so students can identify what they are currently working on
- Category-based access to the most relevant study guides based on those selections

## Technologies and Tools

- React 18
- React DOM
- Vite
- JavaScript (ES modules)
- CSS
- HTML5
- Intersection Observer API for active section tracking and reveal behavior
- GitHub Pages for deployment
- Git and GitHub for version control
- FFmpeg for hero video compression and audio removal

## Project Structure

```text
src/
  components/
    AboutSection.jsx
    CalendlySection.jsx
    Hero.jsx
    MediaPressSection.jsx
    SiteFooter.jsx
    SiteHeader.jsx
  hooks/
    useReveal.js
  App.jsx
  App.css
  main.jsx
  siteContent.js

public/
  assets/

.github/
  workflows/
    deploy.yml
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Content and Assets

- Main site content is managed in `src/siteContent.js`
- Page structure is split into reusable React components in `src/components/`
- Styling is organized into component-level CSS files
- Static images, icons, and video assets live in `public/assets/`

## Deployment

- The site is configured for GitHub Pages deployment through GitHub Actions
- Vite uses the repository base path required for project-page deployments
- Production output is generated in `dist/` and deployed by `.github/workflows/deploy.yml`

## Notes

- Hero videos are compressed local MP4 assets with audio removed for faster loading
- The booking section is currently a placeholder until Calendly is configured
- The student resource workflow is planned but not yet implemented
