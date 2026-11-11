import React from 'react';

export default function Marquee() {
  const skillsRow1 = [
    'PYTHON 88%', 'REACT 86%', 'NODE.JS 84%',
    'HTML5 & CSS3 90%', 'JAVASCRIPT ES6+ 82%', 'SQL / DATABASES 78%', 'MACHINE LEARNING 60%'
  ];

  const skillsRow2 = [
    'FULL-STACK ARCHITECTURE', 'FASTAPI ASYNC ROUTING', 'EXPLAINABLE AI REASONING',
    'ALGORAND x402 SETTLEMENT', 'GOOGLE GEMINI API', 'DATA STRUCTURES & ALGORITHMS', 'DATABASE NORMALIZATION'
  ];

  return (
    <div className="marquee-container-wrap" aria-hidden="true">
      <div className="marquee-track">
        {skillsRow1.concat(skillsRow1).map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span className="item-bullet">●</span> {item}
          </div>
        ))}
      </div>

      <div className="marquee-track marquee-track-reverse">
        {skillsRow2.concat(skillsRow2).map((item, idx) => (
          <div key={idx} className="marquee-item">
            <span className="item-bullet">◆</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}

