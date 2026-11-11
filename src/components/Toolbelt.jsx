import React, { useState } from 'react';

export default function Toolbelt() {
  const [activeFilter, setActiveFilter] = useState('all');

  const allSkills = [
    {
      name: 'Python',
      pct: '88%',
      cat: 'building',
      sub: 'Python Fundamentals, Backend & Scripting, Python for Data'
    },
    {
      name: 'FastAPI',
      pct: '85%',
      cat: 'building',
      sub: 'High-Concurrency Async Routing, REST Endpoints, PII Redaction'
    },
    {
      name: 'React',
      pct: '86%',
      cat: 'building',
      sub: 'Component Architecture, JSX, State & Hooks'
    },
    {
      name: 'Git & GitHub',
      pct: '88%',
      cat: 'building',
      sub: 'Version Control, Branch Management, PR Workflows'
    },
    {
      name: 'Node.js',
      pct: '84%',
      cat: 'building',
      sub: 'Backend APIs, Express.js, Async Runtime'
    },
    {
      name: 'Google Gemini API',
      pct: '82%',
      cat: 'building',
      sub: 'AI Risk Classification, Structured Prompts, Model Integration'
    },
    {
      name: 'HTML5 & CSS3',
      pct: '90%',
      cat: 'building',
      sub: 'CSS Grid, Flexbox, Semantic Markup'
    },
    {
      name: 'Tailwind CSS',
      pct: '86%',
      cat: 'building',
      sub: 'Utility-First Styling, Responsive Systems, Dark Mode'
    },
    {
      name: 'JavaScript (ES6+)',
      pct: '82%',
      cat: 'building',
      sub: 'DOM Manipulation, Async/Await, Events'
    },
    {
      name: 'REST APIs & JSON',
      pct: '86%',
      cat: 'building',
      sub: 'Async Data Flow, Contract Serialization, HTTP Protocols'
    },
    {
      name: 'SQL / Databases',
      pct: '78%',
      cat: 'exploring',
      sub: 'Schema Design, Queries, Normalization'
    },
    {
      name: 'Algorand SDK',
      pct: '72%',
      cat: 'exploring',
      sub: 'On-Chain Milestone Settlement, Cryptographic Tx Verification'
    },
    {
      name: 'Machine Learning',
      pct: '60%',
      cat: 'exploring',
      sub: 'Fundamentals, Python-based Modeling'
    },
    {
      name: 'Data Structures',
      pct: '75%',
      cat: 'exploring',
      sub: 'Arrays, Trees, Algorithm Optimization, Problem Solving'
    }
  ];

  const filteredSkills = allSkills.filter(s => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'building') return s.cat === 'building';
    if (activeFilter === 'exploring') return s.cat === 'exploring';
    return true;
  });

  return (
    <section className="toolbelt-section" id="toolbelt">
      <div className="container">
        
        <div className="toolbelt-header-bar">
          <div className="section-title-wrap">
            <h2>04 // TOOLBELT</h2>
            <p>TECHNICAL STACK &amp; ENGINEERING CAPABILITIES</p>
          </div>

          <div className="skills-tabs-bar">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'building', label: 'BUILDING WITH' },
              { id: 'exploring', label: 'EXPLORING' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`skill-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-cards-list" id="skills-list">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="skill-card" data-category={skill.cat}>
              <div className="skill-card-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.pct}</span>
              </div>
              <div className="skill-subtext">{skill.sub}</div>
              <div className="skill-progress-track">
                <div className="skill-progress-fill" style={{ width: skill.pct }}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
