import "../Header/Header.css";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LogoLight from "../../assets/Asset.svg";
import LogoDark from "../../assets/colored-logo.png";



function Header() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-left">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
             src={darkMode ? LogoDark : LogoLight}
            alt="Tech MindSera Logo"
            className="logo-img"
          />
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className={`header-center ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        {/* <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink> */}
        <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>

      {/* Right */}
      <div className="header-right">
        <span className="icon" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀" : "🌙"}
        </span>

        <NavLink to="/sign-in" className="signin">Sign In</NavLink>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
