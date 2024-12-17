import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach((section) => {
        const { top, bottom } = document.getElementById(section)?.getBoundingClientRect() || {};
        if (top <= 100 && bottom >= 100) setActiveSection(section);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={() => setActiveSection(section)} className={activeSection === section ? 'active' : ''}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/roxanne-alcordo-7210a833a/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/roxsand" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`hamburger-icon ${menuOpen ? 'open' : ''}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;