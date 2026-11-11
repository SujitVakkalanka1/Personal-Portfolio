import React from 'react';

export default function SpotlightCard() {
  return (
    <section className="spotlight-section" id="spotlight">
      <div className="container">
        <div className="spotlight-canvas">
          <div className="spotlight-inner-grid">
            
            <div className="spotlight-arch-card">
              <div className="circular-text-wrap">
                <svg className="circular-text-svg" viewBox="0 0 200 200">
                  <path id="circlePath" fill="none" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                  <text fontFamily="'JetBrains Mono', monospace" fontSize="10.5" fontWeight="700" fill="#CEF152" letterSpacing="2.2">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      SUJIT VAKKALANKA • SOFTWARE ENGINEERING • FULL-STACK &amp; SYSTEMS • ARCHITECTURE •
                    </textPath>
                  </text>
                </svg>
                <div className="circular-center-badge">SV</div>
              </div>

              <h3 className="spotlight-title">SUJIT VAKKALANKA</h3>
              <p className="spotlight-subtitle">SOFTWARE ENGINEERING STUDENT</p>

              <div className="student-record-pill-box">
                <div className="student-record-row">
                  <span className="rec-label">PROGRAM &amp; YEAR:</span>
                  <span className="rec-val">B.Tech CSIT (2nd Year)</span>
                </div>
                <div className="student-record-row">
                  <span className="rec-label">CORE FOCUS:</span>
                  <span className="rec-val">Full-Stack &amp; Systems</span>
                </div>
                <div className="student-record-row">
                  <span className="rec-label">LOCATION:</span>
                  <span className="rec-val" style={{ color: 'var(--text-dim)' }}>Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="spotlight-content-side">
              <span className="spotlight-badge">01 // BACKGROUND</span>
              <h2 className="spotlight-heading">ACADEMIC FOUNDATION & PHILOSOPHY</h2>
              <p className="spotlight-desc-1">
                I'm pursuing a Bachelor of Technology in Computer Science and Information Technology, currently in my second year. My focus right now spans four areas at once: Python as my primary language, full-stack web development, database design, and an early but deliberate start in machine learning.
              </p>
              <p className="spotlight-desc-2">
                I don't treat these as isolated courses. Every project I take on is a chance to connect two or three of them — a script that needs a database behind it, a web app that needs a backend built the right way, a dataset that needs both Python and a working understanding of the model behind it.
              </p>

              <div className="academic-pillars-grid">
                <div className="pillar-card">
                  <div className="pillar-num">PILLAR 01 //</div>
                  <div className="pillar-title">PYTHON</div>
                  <p className="pillar-copy">My primary language. The one I reach for first when a problem needs solving, from quick scripts to backend logic and early ML work.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-num">PILLAR 02 //</div>
                  <div className="pillar-title">FULL-STACK</div>
                  <p className="pillar-copy">Connecting frontend interfaces to backend logic and real data, end to end.</p>
                </div>

                <div className="pillar-card">
                  <div className="pillar-num">PILLAR 03 //</div>
                  <div className="pillar-title">MACHINE LEARNING</div>
                  <p className="pillar-copy">Starting to build the models that make sense of data, grounded in solid fundamentals.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

