import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar({ darkMode, toggleDarkMode, activeSection }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? 'nav-dark' : 'nav-light'}`}>
      <div className="brand">Metz<span className="brand-dot">•</span>W</div>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={()=>setOpen(false)}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={()=>setOpen(false)}>About</a></li>
        <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={()=>setOpen(false)}>Experience</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={()=>setOpen(false)}>Projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={()=>setOpen(false)}>Contact</a></li>
        <li>
          <button className="dark-mode-icon" onClick={toggleDarkMode} aria-label="Toggle theme">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
