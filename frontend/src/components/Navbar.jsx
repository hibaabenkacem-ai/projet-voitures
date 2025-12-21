import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex-between">
        {/* LOGO */}
        <div className="logo">
          <span className="logo-orange">Auto</span>Market
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          <li><Link to="#">À propos</Link></li>
          <li><Link to="#">Nos voitures</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
