import React from "react";

export default function Navbar() {

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container flex-between">

        {/* LOGO */}
        <div className="logo">
          <span className="logo-orange">Auto</span>Market
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollTo("about")}>À propos</button>
          </li>
          <li>
            <button onClick={() => scrollTo("cars")}>Nos voitures</button>
          </li>
          <li>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </li>
        </ul>

      </div>
    </nav>
  );
}
