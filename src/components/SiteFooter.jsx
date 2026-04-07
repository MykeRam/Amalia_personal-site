import React from "react";
import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer-copy">© Amalia A. 2026</p>
      <p className="site-footer-credit">
        Developed by{" "}
        <a
          href="https://mykeram.github.io/Mykes-Photog/"
          target="_blank"
          rel="noreferrer"
        >
          Michael Ramirez
        </a>
      </p>
    </footer>
  );
}

export default SiteFooter;
