import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, tech, link, image, onOpen }) {
  return (
    <div className="project-card" onClick={onOpen} role="button" tabIndex={0}
         onKeyDown={(e)=> e.key==='Enter' && onOpen()}>
      {image && <img src={image} alt={title} className="project-thumb" />}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tech">{tech}</div>
      </div>
    </div>
  );
}
