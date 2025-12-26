import React, { useEffect } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  const { title, longDescription, tech, image, link, live, features = [] } = project;

  return (
    <div className="pm-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pm-modal" onClick={(e)=>e.stopPropagation()}>
        <button className="pm-close" onClick={onClose} aria-label="Close">✕</button>

        {image && (
          <div className="pm-hero">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="pm-body">
          <h3 className="pm-title">{title}</h3>
          {longDescription && <p className="pm-desc">{longDescription}</p>}

          {features.length > 0 && (
            <ul className="pm-list">
              {features.map((f,i)=><li key={i}>{f}</li>)}
            </ul>
          )}

          <div className="pm-meta"><strong>Tech:</strong> {tech}</div>

          <div className="pm-actions">
            {live && <a className="btn btn-primary" href={live} target="_blank" rel="noreferrer">View Live</a>}
            {link && <a className="btn btn-ghost" href={link} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
