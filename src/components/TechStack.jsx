import React from 'react';
import './TechStack.css';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiPostgresql, SiDocker } from 'react-icons/si';

const tools = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
  ,

];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section tech-section">
      <h2 className="tech-title">Tools & Technologies</h2>
      <div className="tech-grid">
        {tools.map(t => (
          <div className="tech-chip" key={t.name} title={t.name}>
            <span className="tech-icon">{t.icon}</span>
            <span className="tech-name">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
