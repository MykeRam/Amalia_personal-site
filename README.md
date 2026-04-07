# Amalia Personal Site

Single-page personal website for Amalia Andaverde. The site is built as a React-based landing page with a full-screen video hero, an About section, and a reserved calendar section for a future Calendly embed.

## Current Sections

- Hero section with rotating background video
- About section with portrait, biography, and qualifications
- Calendar section placeholder for future scheduling
- Header navigation with smooth scrolling

## Technologies and Tools Used

- React 18
- React DOM
- Vite
- JavaScript (ES modules)
- CSS
- HTML5
- Intersection Observer API for section visibility state
- Git and GitHub for version control
- FFmpeg for video compression and audio removal on hero assets

## Project Structure

```text
src/
  components/
    AboutSection.jsx
    CalendlySection.jsx
    Hero.jsx
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
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content and Assets

- Main editable page copy lives in `src/siteContent.js`
- Component markup lives in `src/components/`
- Component-specific styling is split into individual `.css` files
- Static media lives in `public/assets/`

## Notes

- The hero uses locally stored compressed MP4 videos
- The calendar area is a placeholder until Calendly is configured
- Navigation uses smooth scrolling to jump between sections
