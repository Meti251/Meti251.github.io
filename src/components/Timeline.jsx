import React from 'react';
import './Timeline.css';

const items = [
    { title:'M.S. in Computer Science', org:'Catholic University of America', period:'2024 – Present', bullets:['Focus: AI, Web Systems, HCI.','TA: Intro to Web Dev.'] },
    { title:'B.S. in Computer Engineering', org:'Marwadi University', period:'2020 – 2024', bullets:['Capstone: real-time object detection.'] },
    { title:'Graduate Library Assistant', org:'John K. Mullen Library, Catholic University of America', period:'Jan 2025 – Present', bullets:['Developed responsive web applications using React and Node.js.','Collaborated with designers to improve UI/UX.'] },
    { title:'MultiModal AI Lab (Research Intern)', org:'Catholic University of America', period:'Aug 2025 – Present', bullets:['Built an e-commerce website that uses Laravel and React.','Implemented user authentication and payment gateway integration.'] },
     { title:'E-board and Graduate Representative (EESA)', org:'Catholic University of America', period:'Oct 2025 – Present', bullets:['Built an e-commerce website that uses Laravel and React.','Implemented user authentication and payment gateway integration.'] },
    {title:'Teaching Assistant', org:'Marwadi University', period:'May 2024 – Aug 2024', bullets:['Thought a Computer Workshop course for first year computer engineering students.'] }, 
     { title:'Full-Stack Developer (Intern)', org:'Fuerte Developers', period:'Jan 2024 – march 2024', bullets:['Built an e-commerce website that uses Laravel and React.','Implemented user authentication and payment gateway integration.'] },
      
   

  ];

export default function Timeline(){
  return (
    <div className="timeline">
      {items.map((it, idx)=>(
        <div className="t-row" key={idx}>
          <div className="t-dot" />
          <div className="t-card">
            <div className="t-header">
              <h4 className="t-title">{it.title}</h4>
              <span className="t-period">{it.period}</span>
            </div>
            <div className="t-org">{it.org}</div>
            <ul className="t-bullets">{it.bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  );
}
