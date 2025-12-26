import React from "react";
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certs = [
     {
      title: "IBM Quantum Fall Fest 2025",
      issuer: "IBM",
      year: "2025",
      link: "#"
    },
    {
      title: "Cloud Architecture & Design",
      issuer: "LinkedIn Learning",
      year: "2025",
      link: "#"
    },
    {
      title: "AI & Machine Learning Foundations",
      issuer: "LinkedIn Learning",
      year: "2025",
      link: "#"
    },
    {
      title: "AWS Cloud Practitioner (CLF-C02) — In Progress",
      issuer: "Amazon Web Services",
      year: "",
      link: "#"
    },
    { title: "Graphic Designing Masterclass",
      issuer: "Udemy",
      year: "2024",
      link: "#"
    }

  ];

  return (
    <section id="certifications" className="section">
      <h2 className="cert-title">Certifications</h2>

      <div className="cert-grid">
        {certs.map((c, idx) => (
          <div className="cert-card" key={idx}>
            <FaCertificate className="cert-icon" />

            <h3 className="cert-name">{c.title}</h3>
            <p className="cert-issuer">{c.issuer}</p>
            {c.year && <p className="cert-year">{c.year}</p>}

            {c.link !== "#" && (
              <a href={c.link} target="_blank" className="cert-link">
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
