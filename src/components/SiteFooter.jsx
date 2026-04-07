import React from "react";
import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Lorem ipsum dolor sit amet.</p>
    </footer>
  );
}

export default SiteFooter;
