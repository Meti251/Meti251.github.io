import React from 'react';
import './achievements.css';
import { FaAward, FaCertificate, FaMedal } from 'react-icons/fa';

export default function Achievements() {
  const items = [
    {
      icon: <FaAward />,
      title: 'AWS Certified Cloud Practitioner',
      desc: 'Credential earned for foundational knowledge of cloud concepts and AWS services.',
      year: '2025',
    },
    {
      icon: <FaCertificate />,
      title: 'LinkedIn Learning – Cloud Architecture & Design',
      desc: 'Completed a professional course focusing on scalable cloud solutions and architecture.',
      year: '2025',
    },
    {
      icon: <FaMedal />,
      title: 'Catholic OS Hackathon – Winner',
      desc: 'Led a team to develop an AI-powered project focused on infrastructure optimization.',
      year: '2025',
    },
  ];

  return (
    <section id="achievements" className="section achievements-section">
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="achievements-grid">
        {items.map((a, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{a.icon}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <span className="achievement-year">{a.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
