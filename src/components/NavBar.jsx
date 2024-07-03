import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/viridislogo.png";
import ThemeToggle from './ThemeToggle';

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavLinks = () => (
  <>
    <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Viridis</Link>
  </>
);

  return (
  <nav className={`nav ${isMobile ? 'mobile' : ''}`}>
    <img src={logo} alt="Plethora Viridis Logo" className={`logo ${isMobile ? 'mobile-nav-logo' : ''}`} />

    {isMobile ? (
      <>
        <button className="hamburger" onClick={toggleMenu}>
          <i className="material-icons">{menuOpen ? 'close' : 'menu'}</i>
        </button>
        {menuOpen && (
          <ul className="menu mobile">
            <NavLinks />
            <li><ThemeToggle /></li>
          </ul>
        )}
      </>
    ) : (
      <div className="nav-content">
        <div className="nav-links">
          <NavLinks />
        </div>
        <ThemeToggle />
      </div>
    )}
  </nav>
);
}

export default NavBar;