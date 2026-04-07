const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`;

export const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "calendar", label: "Calender" },
  { id: "media-press", label: "Media & Press" }
];

export const heroContent = {
  fullName: "Amalia Andaverde",
  title: "Aviation Professional specializing in pilot training, flight instruction, and student development",
  description:
    "Preparing the next generation of pilots through disciplined, personalized, and results-driven aviation instruction",
  bookingLabel: "Schedule a Consultation",
  bookingLink: "",
  posterSrc: assetPath("plane-boeing.jpg"),
  videoSources: [
    assetPath("vecteezy_advanced-camera-drone-hovering-over-a-picturesque-river_71293716.mp4"),
    assetPath("vecteezy_amsterdam-the-netherlands-july-25-2017-klm-royal-dutch_28208780.mp4"),
    assetPath("vecteezy_rear-view-of-jet-plane-landing-glare-of-the-sun-reflection_8588534.mp4")
  ],
  videoRotateMs: 7000,
  imageAlt: "Airplane in flight"
};

export const aboutContent = {
  imageSrc: assetPath("amalia-about.avif"),
  imageAlt: "Portrait of Amalia Andaverde",
  linkedinUrl: "https://www.linkedin.com/in/amalia-andaverde/",
  paragraphs: [
    "With a passion for aviation that began in 2006, I have dedicated my career to advancing within the industry while helping others achieve their goals in flight. I started my aviation journey as a gate agent for America West, gaining an early foundation in airline operations and customer service.",
    "In 2020, I was selected to join the American Airlines Cadet Academy, an important milestone that further strengthened my commitment to a career in aviation. After graduating in 2022, I continued my professional development with Piedmont as a cadet.",
    {
      segments: [
        "Since then, I have gained valuable flight experience and have served as a Certified Flight Instructor - Instrument at ",
        {
          text: "Fly AmaliAir",
          href: "https://www.flyamaliair.com/"
        },
        ". In this role, I develop and implement customized training syllabi designed to challenge students, strengthen decision-making, and build confidence in complex and dynamic flight environments. I have successfully trained students pursuing Private, Commercial, and Instrument ratings, and I take pride in maintaining a strong pass rate along with consistently positive student feedback."
      ]
    },
    "My commitment to aviation extends beyond instruction. I am deeply invested in continuous growth, professional excellence, and contributing to the next generation of aviators through disciplined, high-quality training and mentorship."
  ],
  qualifications: [
    "Certified Flight Instructor - Instrument (CFI-I)",
    "Airline Transport Pilot (ATP)",
    "Drone Professor, Arizona Western College",
    "Aviation Department Director, Fall 2026"
  ]
};

export const calendlyContent = {
  title: "Student Booking Calendar",
  description:
    "This reserved space will hold the Calendly scheduler once it is configured. The embed area is already sized for a full booking calendar.",
  note: "Calendly embed coming soon"
};

export const mediaPressContent = {
  title: "Media & Press",
  description:
    "Explore recent media coverage, interviews, and podcast features showcasing Amalia Andaverde’s experience, professional journey, and impact within the aviation industry.",
  items: [
    {
      title: "Sunrise interview feature",
      source: "KYMA 11 Facebook",
      href: "https://www.facebook.com/KYMA11/posts/sunrise-anchor-samantha-byrd-kyma-spoke-to-pilot-amalia-andaverde-about-amaliair/924700759697000/"
    },
    {
      title: "Yuma flight instructor helping locals achieve aviation dreams",
      source: "AZFamily",
      href: "https://www.azfamily.com/2024/07/25/yuma-flight-instructor-helping-locals-achieve-aviation-dreams/"
    },
    {
      title: "Learn how to fly a plane and become a pilot right in your own backyard",
      source: "KYMA",
      href: "https://kyma.com/lifestyle/community/2024/07/15/learn-how-to-fly-a-plane-and-become-a-pilot-right-in-your-own-backyard/"
    },
    {
      title: "Amalia Andaverde's journey at the AA Cadet Academy",
      source: "Apple Podcasts",
      href: "https://podcasts.apple.com/us/podcast/6-amalia-andaverdes-journey-at-the-aa-cadet-academy/id1611044496?i=1000559130233"
    }
  ]
};
