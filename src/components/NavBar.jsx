import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/viridislogo.png";
import logoDark from "../assets/viridislogo3.png";  // Assuming this is the higher quality PNG in public folder
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../ThemeContext';

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

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
      <Link className="nav-link" to="/who" onClick={() => setMenuOpen(false)}>who</Link>
      <Link className="nav-link" to="/what" onClick={() => setMenuOpen(false)}>what</Link>
      <Link className="nav-link" to="/why" onClick={() => setMenuOpen(false)}>why</Link>
    </>
  );

  return (
    <nav className={`nav ${isMobile ? 'mobile' : ''}`}>
      <img
        src={theme === 'light' ? logoLight : logoDark}
        alt="Logo"
        className={`logo ${isMobile ? 'mobile-nav-logo' : ''}`}
      />

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