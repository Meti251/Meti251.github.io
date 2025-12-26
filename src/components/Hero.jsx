import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          
          <span className="opportunity-badge">
              Open to Opportunities
          </span>
         
          <h1 className="hero-title">Meti Wakwoyya</h1>
           <p className="hero-subtitle typewriter">
       Full-Stack Developer · AI & ML Enthusiast · M.S. Computer Science
      </p>
       <p className="hero-description">
            I’m a Master’s student in Computer Science at The Catholic University of America,
            building web and AI projects that solve real problems. With a background in computer engineering,I enjoy working across the full stack,from clean, intuitive frontends to robust backend and data-driven systems.
          </p>
            <p className="hero-meta">
            Currently based in Washington, DC · Open to internships, research, and collaboration.
          </p>

          <div className="hero-ctas">
            {/* <a href="#projects" className="btn btn-primary">View Projects</a> */}
            <a href="/resumes.pdf" className="resume-button" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/profile.jpg" alt="Nunu portrait" />
        </div>
      </div>
    </section>
  );
}
