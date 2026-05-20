import React from "react";
import { useEffect, useState } from "react";
import {
  sections,
  heroContent,
  aboutContent,
  mediaPressContent,
  calendlyContent
} from "./siteContent";
import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MediaPressSection from "./components/MediaPressSection";
import CalendlySection from "./components/CalendlySection";
import SiteFooter from "./components/SiteFooter";
import StudentDashboard from "./components/StudentDashboard";
import StudentLoginModal from "./components/StudentLoginModal";
import { supabase } from "./lib/supabaseClient";
import { requestStudentMagicLink } from "./lib/studentLogin";
import "./App.css";

const DASHBOARD_HASH = "#student-dashboard";

const getRouteFromLocation = () =>
  window.location.hash === DASHBOARD_HASH ? "dashboard" : "site";

const getDashboardRedirectUrl = () => {
  const redirectUrl = new URL(window.location.href);
  redirectUrl.hash = DASHBOARD_HASH;
  return redirectUrl.toString();
};

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [session, setSession] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [route, setRoute] = useState(getRouteFromLocation);

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

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getRouteFromLocation());
    };

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
    if (!supabase) {
      setIsAuthReady(true);
      return undefined;
    }

    let isActive = true;

    const syncSession = async () => {
      const {
        data: { session: currentSession }
      } = await supabase.auth.getSession();

      if (!isActive) {
        return;
      }

      setSession(currentSession);
      setIsAuthReady(true);
    };

    syncSession();

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setIsAuthReady(true);
    });

    return () => {
      isActive = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isAuthReady) {
      return;
    }

    const hasAuthCallback = window.location.search.includes("code=");

    if (session && route !== "dashboard") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}${DASHBOARD_HASH}`
      );
      setRoute("dashboard");
      setIsLoginModalOpen(false);
      return;
    }

    if (!session && route === "dashboard" && !hasAuthCallback) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      setRoute("site");
      setIsLoginModalOpen(true);
    }
  }, [isAuthReady, route, session]);

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

  const handleStudentLogin = async (email) => {
    await requestStudentMagicLink({
      email,
      redirectTo: getDashboardRedirectUrl()
    });
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }

    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    setRoute("site");
    setIsLoginModalOpen(false);
  };

  const isLoggedIn = Boolean(session);

  return (
    <>
      {route === "dashboard" && isLoggedIn ? (
        <StudentDashboard email={session?.user?.email ?? ""} onSignOut={handleSignOut} />
      ) : (
        <div className="page-shell">
          <SiteHeader
            sections={sections}
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onStudentLoginClick={() => setIsLoginModalOpen(true)}
            isStudentLoginOpen={isLoginModalOpen}
          />
          <main>
            <Hero content={heroContent} onNavigate={handleNavigate} />
            <AboutSection content={aboutContent} />
            <CalendlySection content={calendlyContent} />
            <MediaPressSection content={mediaPressContent} />
          </main>
          <SiteFooter />
        </div>
      )}

      <StudentLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSubmit={handleStudentLogin}
      />
    </>
  );
}

export default App;
