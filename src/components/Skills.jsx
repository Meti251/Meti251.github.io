import React from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Tools</h2>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-icon">{s.icon}</div>
            <p className="skill-name">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
