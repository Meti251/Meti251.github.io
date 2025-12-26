import React from 'react';
import './Footer.css';

export default function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'footer-dark' : 'footer-light'}`}>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Meti. All rights reserved.</p>
       
      </div>
    </footer>
  );
}
