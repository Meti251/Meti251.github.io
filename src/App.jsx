import React, { useState } from 'react';
import './App.css';

import useScrollSpy from './hooks/useScrollSpy';

// sections/components
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Achievements from './components/achievements';


import Footer from './components/Footer';



// assets (put your GIFs here)
import gif1 from './assets/resumes.pdf';
import gif2 from './assets/grocery.jpg';
import gif3 from './assets/ecommerce.mp4';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((v) => !v);

  // scroll-spy tracking these section IDs
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'projects', 'contact']);

  // project data for cards + modal
  const projects = [
    {
      title: 'AI Resume Screener',
      description: 'Ranks resumes against job descriptions using NLP and ML.',
      longDescription:
        'Parses resumes, vectorizes with TF-IDF, and compares to a JD via cosine similarity. Includes keyword boosting and CSV export.',
      tech: 'Python, Streamlit, Scikit-learn',
      link: 'https://github.com/yourusername/resume-screener',
      live: '',
      image: gif1,
      features: ['Upload multiple resumes', 'Keyword boosting', 'CSV export'],
    },
    {
      title: 'Grocery List Organizer',
      description: 'Full-stack app for managing grocery items with auth.',
      longDescription:
        'Register/login, create & share lists, admin categories. JWT auth with role-based permissions.',
      tech: 'ASP.NET Core, SQL Server',
      link: 'https://github.com/yourusername/grocery-app',
      live: '',
      image: gif2,
      features: ['Auth & roles', 'Share lists', 'Category filters'],
    },
    {
      title: 'E-commerce Website',
      description: 'Online store with checkout and admin dashboard.',
      longDescription:
        'Catalog, cart, checkout, and analytics. Payment gateway integrated with a mock provider.',
      tech: 'Laravel, MySQL, Bootstrap',
      link: 'https://github.com/yourusername/laravel-ecommerce',
      live: '',
      image: gif3,
      features: ['Product variants', 'Cart & checkout', 'Sales dashboard'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />

      {/* HERO */}
      <Hero />

      {/* ABOUT + SKILLS */}
      <section id="about" className="section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi! I’m Nunu, a full-stack web developer with a background in computer engineering.
              I love building modern, responsive web apps with React and Node, and I enjoy crafting
              clean, user-friendly interfaces that solve real problems.
            </p>
            <p>
              I’m currently pursuing a master’s in computer science and explore AI-driven projects.
            </p>

            <Skills />
          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience & Education</h2>
        <Timeline />
      </section>\

      <Achievements />
      <Certifications />

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p, idx) => (
            <ProjectCard
              key={idx}
              title={p.title}
              description={p.description}
              tech={p.tech}
              link={p.link}
              image={p.image}
              onOpen={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* MODAL (overlays everything) */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />


      {/* CONTACT */}
<section id="contact" className="section contact-section">
  <h2>Let’s Connect</h2>

  <p className="contact-text">
    I’m always open to discussing opportunities, research collaborations,
    or interesting projects. The best way to reach me is on LinkedIn.
  </p>

  <div className="contact-buttons">
    <a
      href="https://www.linkedin.com/in/metiwakwoyya"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-btn linkedin"
    >
      Connect on LinkedIn
    </a>

    <a
      href="mailto:metiwakwoyya@gmail.com"
      className="contact-btn email"
    >
      Email Me
    </a>

    <a
      href="https://github.com/Meti251"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-btn github"
    >
      View GitHub
    </a>
  </div>
</section>


      {/* FOOTER */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
