export const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" }
];

export const heroContent = {
  eyebrow: "Hero Section",
  fullName: "Amalia Andaverde",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  bookingLabel: "Book a Call",
  bookingLink: "",
  portraitSrc: "/assets/amalia-about.avif",
  portraitAlt: "Portrait of Amalia Andaverde",
  posterSrc: "/assets/plane-boeing.jpg",
  videoSources: [
    "/assets/vecteezy_advanced-camera-drone-hovering-over-a-picturesque-river_71293716.mp4",
    "/assets/vecteezy_amsterdam-the-netherlands-july-25-2017-klm-royal-dutch_28208780.mp4",
    "/assets/vecteezy_rear-view-of-jet-plane-landing-glare-of-the-sun-reflection_8588534.mp4"
  ],
  videoRotateMs: 7000,
  imageAlt: "Airplane in flight"
};

export const aboutCards = [
  {
    title: null,
    featured: true,
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ]
  },
  {
    title: "Lorem ipsum dolor",
    paragraphs: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ]
  },
  {
    title: "Sit amet consectetur",
    paragraphs: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ]
  }
];

export const galleryFilters = [
  { id: "all", label: "All" },
  { id: "flight-deck", label: "Flight Deck" },
  { id: "journey", label: "Journey" },
  { id: "mentorship", label: "Mentorship" }
];

export const galleryItems = [
  {
    id: "regional-ops",
    category: "flight-deck",
    categoryLabel: "Flight Deck",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    detail: "Lorem detail",
    tone: "sunrise",
    size: "wide"
  },
  {
    id: "training-path",
    category: "journey",
    categoryLabel: "Journey",
    title: "Ut enim ad minim veniam",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    detail: "Ipsum detail",
    tone: "atlas",
    size: "standard"
  },
  {
    id: "student-focus",
    category: "mentorship",
    categoryLabel: "Mentorship",
    title: "Duis aute irure dolor",
    description:
      "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    detail: "Dolor detail",
    tone: "cloudline",
    size: "standard"
  },
  {
    id: "professional-presence",
    category: "flight-deck",
    categoryLabel: "Flight Deck",
    title: "Excepteur sint occaecat",
    description:
      "Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    detail: "Amet detail",
    tone: "dusk",
    size: "standard"
  },
  {
    id: "why-aviation",
    category: "journey",
    categoryLabel: "Journey",
    title: "Sed ut perspiciatis unde",
    description:
      "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    detail: "Sit detail",
    tone: "contrail",
    size: "standard"
  },
  {
    id: "next-generation",
    category: "mentorship",
    categoryLabel: "Mentorship",
    title: "Eaque ipsa quae ab illo",
    description:
      "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    detail: "Elit detail",
    tone: "golden-hour",
    size: "wide"
  }
];
