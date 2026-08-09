/**
 * SUJIT VAKKALANKA - PERSONAL PORTFOLIO INTERACTIVE LOGIC
 * High-performance event handlers, modal engines, search filtering,
 * algorithm visualizer, theme toggle, and fallback dataset integration.
 */

const INLINE_PORTFOLIO_DATA = {
  personalInfo: {
    name: "Sujit Vakkalanka",
    title: "2nd-Year B.Tech CSIT Student",
    institution: "K L University",
    status: "SUJIT VAKKALANKA // K L UNIVERSITY",
    headline: "Code across the stack. Systems that actually run.",
    intro: "B.Tech CSIT student at K L University working across Python, Java, full-stack development, databases, and machine learning — not as separate boxes to check, but as one connected skill set I'm applying to real builds, from web apps to data-driven tools.",
    links: {
      github: "https://github.com/SujitVakkalanka1",
      linkedin: "https://www.linkedin.com/in/sujit-vakkalanka-862878383/",
      email: "vsbsujit883@gmail.com",
      resume: "#resume"
    }
  },
  background: {
    heading: "01 // BACKGROUND",
    paragraphs: [
      "I'm pursuing a Bachelor of Technology in Computer Science and Information Technology, currently in my second year. My focus right now spans five areas at once: Python for scripting and automation, Java fundamentals, full-stack web development, database design, and an early but deliberate start in machine learning.",
      "I don't treat these as isolated courses. Every project I take on is a chance to connect two or three of them — a script that needs a database behind it, a web app that needs a backend built the right way, a dataset that needs both Python and a working understanding of the model behind it."
    ],
    pillars: [
      { id: "01", title: "PYTHON", desc: "Scripting, automation, and data handling. The language I reach for first when a problem needs solving fast." },
      { id: "02", title: "JAVA", desc: "Object-oriented design, memory and data structures, the groundwork most backend systems are built on." },
      { id: "03", title: "FULL-STACK DEVELOPMENT", desc: "Connecting frontend interfaces to backend logic and real data, end to end." },
      { id: "04", title: "MACHINE LEARNING", desc: "Starting to build the models that make sense of data, grounded in solid fundamentals." }
    ]
  },
  learningTracks: [
    {
      id: "fullstack",
      tag: "WEB DEVELOPMENT TRACK",
      title: "Full-Stack Development",
      description: "Building complete web applications — frontend interactivity, backend logic, and the data layer that ties them together.",
      topics: [
        "DOM manipulation and event-driven interfaces",
        "Asynchronous JavaScript and API-driven data flow",
        "Backend routing and middleware with Express.js",
        "Connecting applications to real databases, not static data"
      ]
    },
    {
      id: "python",
      tag: "LANGUAGE TRACK",
      title: "Python",
      description: "Using Python as the language for automation, scripting, and the early groundwork for machine learning.",
      topics: [
        "Core syntax, data structures, and control flow",
        "Functions, OOP, and error handling that holds up in real scripts",
        "File I/O and task automation",
        "Working with APIs and structured data (JSON)"
      ]
    },
    {
      id: "ml",
      tag: "EARLY STAGE",
      title: "Machine Learning",
      description: "Starting from the fundamentals — the math and logic behind the models, before reaching for shortcuts.",
      topics: [
        "Core ML concepts and how models actually learn",
        "Working with real datasets, not pre-cleaned demos",
        "Building toward applying Python and data structures knowledge to real ML problems"
      ]
    }
  ],
  projects: [
    {
      id: "clauseguard",
      title: "ClauseGuard AI",
      badge: "FULL-STACK AI & WEB3",
      deployUrl: "https://clause-guard-ai-plum.vercel.app/",
      overview: "An enterprise-grade contract intelligence platform combining a Python/FastAPI backend, React/Tailwind dark-mode dashboard UI, Google Gemini API for legal clause risk analysis (High/Med/Low scoring & automated redlines), and the Algorand SDK for milestone-based smart contract settlement tracking with live Tx ID verification.",
      image: "assets/clauseguard.png?v=1.2.5",
      tech: ["Python", "FastAPI", "React", "Tailwind CSS", "Algorand SDK", "Gemini API"],
      features: [
        "Contract Ingestion & Section Parsing: Automated PDF/DOCX chunking into semantic legal clauses.",
        "FastAPI High-Concurrency Backend: Async routing, zero-retention privacy middleware, and PII redaction.",
        "Gemini AI Risk Engine: High/Med/Low severity scoring, automated clause redlines, and mitigation rationale.",
        "Algorand On-Chain Settlement: Milestone tracking, cryptographic Tx ID verification, and escrow release via Algorand SDK."
      ],
      challenge: {
        problem: "Legal teams and enterprise buyers require instant clause risk detection and automated redlines, paired with verifiable, on-chain milestone settlement tracking without compromising UX or data privacy.",
        audience: "Legal tech firms, enterprise procurement teams, and decentralized Web3 applications."
      },
      process: {
        decisions: [
          "Layer 1 - Ingestion: Chunking contracts into normalized clauses with section numbers.",
          "Layer 2 - FastAPI Backend: Async route execution with zero-retention headers and memory sanitization.",
          "Layer 3 - Gemini AI Core: Structured Prompting for High/Med/Low risk classification & redline generation.",
          "Layer 4 - Algorand SDK Settlement: Milestone state machine with on-chain Tx ID verification."
        ],
        architecture: "React Client UI ➔ FastAPI Routing ➔ Gemini AI Risk Engine ➔ Algorand Smart Contract Settlement (Tx ID) ➔ Audit Response"
      },
      impact: {
        metrics: [
          { value: "100%", label: "Verified On-Chain Settlement" },
          { value: "Gemini API", label: "Risk Engine Core" },
          { value: "Algorand SDK", label: "Milestone Escrow" }
        ],
        takeaway: "Proved that multi-agent LLM clause reasoning and Web3 smart contract settlement can be unified into a seamless, sub-second dark-mode legal workflow."
      },
      demoCode: "# FastAPI + Gemini LLM Risk Engine + Algorand x402 Protocol Endpoint\nfrom fastapi import FastAPI, HTTPException, Header\nimport algosdk\nimport google.generativeai as gemini\n\napp = FastAPI(title='ClauseGuard AI Engine')\n\n@app.post('/api/v1/analyze-clause')\nasync def analyze_clause_endpoint(\n    request: ClauseAnalysisRequest,\n    x_algorand_tx_id: str = Header(..., alias='X-Algorand-Tx-ID')\n):\n    # 1. Verify Algorand x402 On-Chain Micro-Payment Settlement\n    tx_verified = verify_algorand_settlement(x_algorand_tx_id, min_microalgos=1000)\n    if not tx_verified:\n        raise HTTPException(status_code=402, detail='Payment Required: Invalid Algorand Tx ID')\n\n    # 2. Delegate Legal Text to Gemini API for Clause Risk Analysis\n    prompt = f\"Analyze legal clause: '{request.clause_text}' - Assign Risk Score (HIGH/MEDIUM/LOW), provide suggested redline, and detail mitigation rationale.\"\n    gemini_response = await gemini.generate_content_async(prompt)\n    \n    return {\n        'clause_id': request.clause_id,\n        'payment_status': 'SETTLED_ON_CHAIN',\n        'algorand_tx_id': x_algorand_tx_id,\n        'risk_analysis': gemini_response.structured_json\n    }"
    },
    {
      id: "xai",
      title: "X-AI Financial Reasoning Engine",
      badge: "EXPLAINABLE AI SYSTEM",
      overview: "A financial reasoning tool built around explainability: it takes in numerical financial data and doesn't just output a prediction, it shows the reasoning behind it. The goal was to make the 'why' behind a financial output as visible as the output itself, not a black box.",
      image: "assets/xai.png",
      tech: ["Python", "Machine Learning", "Explainable AI"],
      features: [
        "Numerical financial data parser and feature normalization pipeline.",
        "Explainable AI decision tree rendering feature weight contributions.",
        "Interactive UI visualizing prediction confidence and step-by-step logic."
      ],
      challenge: {
        problem: "Traditional financial ML models operate as black boxes, making predictions without giving financial analysts or users insight into why a decision was reached.",
        audience: "Financial analysts, fintech developers, and ML researchers."
      },
      process: {
        decisions: [
          "Focused on feature weight transparency over black-box deep learning models.",
          "Built step-by-step rationale generation alongside numerical outputs.",
          "Structured clean Python data processing modules for rapid recalculation."
        ],
        architecture: "Financial Data Input → Python ML Engine → Feature Attribution → Rationale Generation → UI View"
      },
      impact: {
        metrics: [
          { value: "100%", label: "Explainable Outputs" },
          { value: "0", label: "Black Box Logic" },
          { value: "Python", label: "Core Engine" }
        ],
        takeaway: "Demonstrated that explainability and interpretability are essential for machine learning applications in risk and financial domain decisions."
      },
      demoCode: "# Explainable Financial Rationale Extractor\ndef generate_reasoning(features, weights):\n    top_contributors = sorted(zip(features, weights), key=lambda x: abs(x[1]), reverse=True)\n    return [{'feature': f, 'impact': w} for f, w in top_contributors]"
    }
  ],
  skills: [
    { name: "Python", category: "building", badge: "BUILDING WITH", subtext: "Python Fundamentals, Backend & Scripting, Python for Data", level: "88%" },
    { name: "React", category: "building", badge: "BUILDING WITH", subtext: "Component Architecture, JSX, State & Hooks", level: "86%" },
    { name: "Node.js", category: "building", badge: "BUILDING WITH", subtext: "Backend APIs, Express.js, Async Runtime", level: "84%" },
    { name: "Java", category: "foundational", badge: "FOUNDATIONAL", subtext: "OOP Principles, Data Structures, Core Logic", level: "75%" },
    { name: "HTML5 & CSS3", category: "building", badge: "BUILDING WITH", subtext: "CSS Grid, Flexbox, Semantic Markup", level: "90%" },
    { name: "JavaScript (ES6+)", category: "building", badge: "BUILDING WITH", subtext: "DOM, Async/Await, Events", level: "82%" },
    { name: "SQL / Databases", category: "exploring", badge: "EXPLORING", subtext: "Schema Design, Queries, Normalization", level: "78%" },
    { name: "Machine Learning", category: "exploring", badge: "EARLY STAGE", subtext: "Fundamentals, Python-based Modeling", level: "60%" }
  ],
  certifications: [
    { title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", badge: "CISCO ACADEMY", date: "Issued Mar 2026", url: "assets/certificates/javascript-essentials.pdf" },
    { title: "CSS Essentials", issuer: "Cisco Networking Academy", badge: "CISCO ACADEMY", date: "Issued Feb 2026", url: "assets/certificates/css-essentials.pdf" },
    { title: "HTML Essentials", issuer: "Cisco Networking Academy", badge: "CISCO ACADEMY", date: "Issued Jan 2026", url: "assets/certificates/html-essentials.pdf" }
  ]
};

// Initialize PORTFOLIO_DATA synchronously with full inline dataset
let PORTFOLIO_DATA = INLINE_PORTFOLIO_DATA;
let algoArray = [45, 20, 78, 12, 60, 35, 90, 25];
let isSorting = false;

// Immediate execution for theme setup before DOMContentLoaded to default to Light Mode (Architectural Editorial)
(function setupThemeEarly() {
  if (!localStorage.getItem('sujit_portfolio_theme_v2')) {
    localStorage.setItem('sujit_portfolio_theme', 'light');
    localStorage.setItem('sujit_portfolio_theme_v2', 'true');
  }
  const currentTheme = localStorage.getItem('sujit_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
})();

document.addEventListener('DOMContentLoaded', async () => {
  initThemeToggle();
  initLiveClock();
  initVerticalNavigation();
  initGlobalModalDelegation();

  // Load portfolio dataset dynamically (overrides with JSON if fetch succeeds)
  await loadPortfolioData();

  initDynamicSearchAndFilter();
  initAlgorithmVisualizer();
  initContactForm();
  initResumeModal();
  initScrollAnimations();
});

/* ==========================================================================
   1. Theme Switcher & Clock Widget
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('sujit_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (toggleBtn) {
    toggleBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#theme-toggle');
    if (btn) {
      e.preventDefault();
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sujit_portfolio_theme', newTheme);
      btn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
      showToast(`Switched to ${newTheme.toUpperCase()} theme mode`);
    }
  });
}

function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  function updateTime() {
    const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    clockEl.textContent = `IST ${new Date().toLocaleTimeString('en-GB', options)}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   2. Vertical Navigation & Mobile Drawer
   ========================================================================== */
function initVerticalNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navMenu.classList.toggle('open');
      mobileMenuBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu) navMenu.classList.remove('open');
      if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
    });
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Dynamic Dataset Loader & Content Renderers
   ========================================================================== */
async function loadPortfolioData() {
  try {
    const res = await fetch('./data/portfolio.json');
    if (res.ok) {
      PORTFOLIO_DATA = await res.json();
    }
  } catch (err) {
    console.warn('[Dynamic Engine] Fetch failed. Using inline dataset fallback.', err);
  }

  renderDynamicContent();
}

function renderDynamicContent() {
  if (!PORTFOLIO_DATA) return;

  // 1. Hero
  const pInfo = PORTFOLIO_DATA.personalInfo;
  if (pInfo) {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && pInfo.headline) {
      if (pInfo.headline.includes(',')) {
        const parts = pInfo.headline.split(',');
        heroTitle.innerHTML = `${parts[0].trim()} <span>${parts[1].trim()}</span>`;
      } else {
        heroTitle.innerHTML = `Code across the stack. <span>Systems that actually run.</span>`;
      }
    }
    const heroIntro = document.querySelector('.hero-intro');
    if (heroIntro && pInfo.intro) heroIntro.textContent = pInfo.intro;
  }

  // 2. Background
  const bgData = PORTFOLIO_DATA.background;
  if (bgData) {
    const bgContainer = document.querySelector('.background-card:first-child');
    if (bgContainer && bgData.paragraphs) {
      bgContainer.innerHTML = bgData.paragraphs.map(p => `<p class="background-text">${p}</p>`).join('');
    }

    const pillarContainer = document.querySelector('.key-highlights');
    if (pillarContainer && bgData.pillars) {
      pillarContainer.innerHTML = bgData.pillars.map(pil => `
        <div class="highlight-box">
          <div class="highlight-title">${pil.id} / ${pil.title}</div>
          <div class="highlight-desc">${pil.desc}</div>
        </div>
      `).join('');
    }
  }

  // 3. Learning Tracks
  const tracks = PORTFOLIO_DATA.learningTracks;
  const learningContainer = document.querySelector('.learning-grid');
  if (learningContainer && tracks) {
    learningContainer.innerHTML = tracks.map(track => `
      <div class="learning-card">
        <div>
          <div class="learning-tag">${track.tag}</div>
          <h3>${track.title}</h3>
          <p>${track.description}</p>
          <ul class="track-topics">
            ${track.topics.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <button class="learning-expand-btn view-project-btn" data-project="${track.id}">Explore Track Details ↗</button>
      </div>
    `).join('');
  }

  // 4. Projects Grid
  renderProjectsGrid(PORTFOLIO_DATA.projects || []);

  // 5. Skills Grid
  renderSkillsMatrix(PORTFOLIO_DATA.skills || []);

  // 6. Certifications Grid
  renderCertifications(PORTFOLIO_DATA.certifications || []);

  initScrollAnimations();
}

function renderCertifications(certifications) {
  const container = document.querySelector('.certifications-grid');
  if (!container || !certifications || !certifications.length) return;

  container.innerHTML = certifications.map(cert => `
    <article class="cert-card">
      <div class="cert-header">
        <div class="cert-issuer-badge">
          <svg width="18" height="12" viewBox="0 0 22 14" fill="currentColor">
            <path d="M2 13V9M6 13V5M10 13V2M14 13V5M18 13V9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <span>CISCO</span>
        </div>
        <span class="skill-category-badge">VERIFIED</span>
      </div>
      <div class="cert-body">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        ${cert.date ? `<p class="cert-date">${cert.date}</p>` : ''}
      </div>
      <div class="cert-footer">
        <a href="${cert.url || '#'}" target="_blank" rel="noopener" class="btn btn-sm btn-primary cert-btn">Show credential ↗</a>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   4. Projects Search & Skills Filtering
   ========================================================================== */
function renderProjectsGrid(projects) {
  const container = document.querySelector('.projects-grid');
  if (!container) return;

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-card); border: 1px dashed var(--border-light);">
        <p class="font-mono" style="color: var(--text-muted);">// NO PROJECTS MATCHED YOUR SEARCH</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(proj => `
    <article class="project-card">
      <div class="project-media">
        <!-- replace with real project screenshot -->
        <img src="${proj.image}" alt="${proj.title}">
      </div>
      <div class="project-details">
        <div class="project-header-group">
          <h3 class="project-title">${proj.title}</h3>
          <div class="project-badge">${proj.badge}</div>
        </div>
        <p class="project-overview">${proj.overview}</p>
        <div class="project-card-footer">
          <div class="project-tech-stack">
            ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap; align-items:center;">
            <button class="btn btn-sm view-project-btn" data-project="${proj.id}">View Details ↗</button>
            ${proj.deployUrl ? `<a href="${proj.deployUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">Live Demo ↗</a>` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join('');

  initScrollAnimations();
}

function initDynamicSearchAndFilter() {
  const searchInput = document.getElementById('project-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderProjectsGrid(PORTFOLIO_DATA.projects || []);
      return;
    }

    const filtered = (PORTFOLIO_DATA.projects || []).filter(proj => {
      const titleMatch = proj.title.toLowerCase().includes(query);
      const overviewMatch = proj.overview.toLowerCase().includes(query);
      const techMatch = proj.tech.some(t => t.toLowerCase().includes(query));
      return titleMatch || overviewMatch || techMatch;
    });

    renderProjectsGrid(filtered);
  });
}

function renderSkillsMatrix(skills) {
  const container = document.querySelector('.skills-grid');
  if (!container) return;

  container.innerHTML = skills.map(s => `
    <div class="skill-card" data-category="${s.category}">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-category-badge">${s.badge}</span>
      </div>
      <p class="section-subtext">${s.subtext}</p>
      <div class="skill-bar-container">
        <div class="skill-bar-fill" data-width="${s.level}"></div>
      </div>
    </div>
  `).join('');

  initSkillsFilterLogic();

  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute('data-width');
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => observer.observe(bar));
}

function initSkillsFilterLogic() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('#toolbelt .skill-card');

  function applyFilter(category) {
    skillCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (cardCat === category) {
        card.style.display = 'block';
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = 'popInCard 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        const fillBar = card.querySelector('.skill-bar-fill');
        if (fillBar) fillBar.style.width = fillBar.getAttribute('data-width');
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.getAttribute('data-filter'));
    });
  });

  // Default to 'building' category on initial load
  applyFilter('building');
}

/* ==========================================================================
   5. Interactive Algorithm Simulator Engine
   ========================================================================== */
function initAlgorithmVisualizer() {
  renderAlgoBars();

  const resetBtn = document.getElementById('algo-reset');
  const startBtn = document.getElementById('algo-start');
  const algoSelect = document.getElementById('algo-select');

  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (isSorting) return;
      algoArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 80) + 15);
      renderAlgoBars();
      updateAlgoStats('Array randomized dynamically. Ready to sort.', 0, 0);
    });
  }

  if (startBtn) {
    startBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (isSorting) return;
      isSorting = true;
      startBtn.disabled = true;

      const algoType = algoSelect ? algoSelect.value : 'bubble';
      if (algoType === 'bubble') await bubbleSort();
      else await selectionSort();

      isSorting = false;
      startBtn.disabled = false;
    });
  }
}

function renderAlgoBars(activeIndices = [], sortedIndices = []) {
  const container = document.getElementById('algo-display');
  if (!container) return;

  container.innerHTML = '';
  algoArray.forEach((val, idx) => {
    const bar = document.createElement('div');
    bar.className = 'algo-bar';
    bar.style.height = `${val * 1.8}px`;
    bar.textContent = val;

    if (activeIndices.includes(idx)) bar.classList.add('active');
    if (sortedIndices.includes(idx)) bar.classList.add('sorted');

    container.appendChild(bar);
  });
}

function updateAlgoStats(statusText, comparisons, swaps) {
  const statusEl = document.getElementById('algo-status');
  const compsEl = document.getElementById('algo-comps');
  const swapsEl = document.getElementById('algo-swaps');

  if (statusEl) statusEl.textContent = statusText;
  if (compsEl) compsEl.textContent = `Comparisons: ${comparisons}`;
  if (swapsEl) swapsEl.textContent = `Swaps: ${swaps}`;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function bubbleSort() {
  let len = algoArray.length;
  let comparisons = 0, swaps = 0, sortedIndices = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      comparisons++;
      updateAlgoStats(`Comparing indices [${j}] and [${j + 1}]`, comparisons, swaps);
      renderAlgoBars([j, j + 1], sortedIndices);
      await sleep(250);

      if (algoArray[j] > algoArray[j + 1]) {
        let temp = algoArray[j];
        algoArray[j] = algoArray[j + 1];
        algoArray[j + 1] = temp;
        swaps++;
        updateAlgoStats(`Swapped ${algoArray[j + 1]} and ${algoArray[j]}`, comparisons, swaps);
        renderAlgoBars([j, j + 1], sortedIndices);
        await sleep(250);
      }
    }
    sortedIndices.push(len - i - 1);
  }
  renderAlgoBars([], Array.from({ length: len }, (_, i) => i));
  updateAlgoStats('Bubble Sort Complete! O(N²) verified.', comparisons, swaps);
}

async function selectionSort() {
  let len = algoArray.length;
  let comparisons = 0, swaps = 0, sortedIndices = [];

  for (let i = 0; i < len; i++) {
    let minIdx = i;
    for (let j = i + 1; j < len; j++) {
      comparisons++;
      updateAlgoStats(`Scanning min element [${j}] vs [${minIdx}]`, comparisons, swaps);
      renderAlgoBars([j, minIdx], sortedIndices);
      await sleep(200);
      if (algoArray[j] < algoArray[minIdx]) minIdx = j;
    }

    if (minIdx !== i) {
      let temp = algoArray[i];
      algoArray[i] = algoArray[minIdx];
      algoArray[minIdx] = temp;
      swaps++;
    }
    sortedIndices.push(i);
    renderAlgoBars([], sortedIndices);
    await sleep(200);
  }
  renderAlgoBars([], Array.from({ length: len }, (_, i) => i));
  updateAlgoStats('Selection Sort Complete!', comparisons, swaps);
}

/* ==========================================================================
   6. Global Event Delegation & Modals
   ========================================================================== */
function initGlobalModalDelegation() {
  document.addEventListener('click', (e) => {
    // Project View / Explore Track buttons
    const projBtn = e.target.closest('.view-project-btn');
    if (projBtn) {
      e.preventDefault();
      const projId = projBtn.getAttribute('data-project');
      openProjectModal(projId);
      return;
    }

    // Modal Close
    if (e.target.closest('#modal-close') || e.target.id === 'project-modal') {
      const modal = document.getElementById('project-modal');
      if (modal) modal.classList.remove('active');
      return;
    }

    // Resume Modal Open/Close
    if (e.target.closest('#view-resume-btn')) {
      e.preventDefault();
      const modal = document.getElementById('resume-modal');
      if (modal) modal.classList.add('active');
      return;
    }

    if (e.target.closest('#resume-modal-close') || e.target.id === 'resume-modal') {
      const modal = document.getElementById('resume-modal');
      if (modal) modal.classList.remove('active');
      return;
    }
  });
}

function openProjectModal(projId) {
  const modalOverlay = document.getElementById('project-modal');
  if (!modalOverlay) return;

  const projList = PORTFOLIO_DATA.projects || INLINE_PORTFOLIO_DATA.projects;
  const proj = projList.find(p => p.id === projId) || projList[0];

  if (!proj) return;

  const titleEl = document.getElementById('modal-title');
  const tagEl = document.getElementById('modal-tag');
  const imgEl = document.getElementById('modal-img');
  const techEl = document.getElementById('modal-tech');

  if (titleEl) titleEl.textContent = proj.title;
  if (tagEl) tagEl.textContent = proj.badge || 'PROJECT SPECIFICATION';
  if (imgEl) imgEl.src = proj.image;
  if (techEl) techEl.innerHTML = (proj.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join('');


  const caseStudyContainer = document.getElementById('case-study-layers');
  let caseStudyHTML = '';

  // Layer 1: Challenge
  if (proj.challenge) {
    caseStudyHTML += `
      <div class="case-study-section">
        <div class="case-study-label">01 // THE CHALLENGE</div>
        <p class="case-study-text">${proj.challenge.problem}</p>
        ${proj.challenge.audience ? `<p class="case-study-audience">Audience: ${proj.challenge.audience}</p>` : ''}
      </div>
    `;
  }

  // Layer 2: Process & Decisions
  if (proj.process) {
    caseStudyHTML += `
      <div class="case-study-section">
        <div class="case-study-label">02 // PROCESS & DECISIONS</div>
        ${proj.process.decisions ? `<ul class="case-study-decisions">${proj.process.decisions.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
        ${proj.process.architecture ? `<div class="case-study-architecture">${proj.process.architecture}</div>` : ''}
      </div>
    `;
  }

  // Layer 3: Solution
  caseStudyHTML += `
    <div class="case-study-section">
      <div class="case-study-label">03 // THE SOLUTION</div>
      <p class="case-study-text">${proj.overview}</p>
    </div>
  `;

  // Layer 4: Impact
  if (proj.impact) {
    const metricsHTML = (proj.impact.metrics || []).map(m => `
      <div class="impact-metric-card">
        <div class="impact-metric-value">${m.value}</div>
        <div class="impact-metric-label">${m.label}</div>
      </div>
    `).join('');

    caseStudyHTML += `
      <div class="case-study-section">
        <div class="case-study-label">04 // THE IMPACT</div>
        ${metricsHTML ? `<div class="impact-metrics-grid">${metricsHTML}</div>` : ''}
        ${proj.impact.takeaway ? `<p class="case-study-takeaway">${proj.impact.takeaway}</p>` : ''}
      </div>
    `;
  }

  if (caseStudyContainer) {
    caseStudyContainer.innerHTML = caseStudyHTML;
  }

  modalOverlay.classList.add('active');
  const modalContainer = modalOverlay.querySelector('.modal-container');
  if (modalContainer) modalContainer.scrollTop = 0;
}

function initResumeModal() {
  const resumeBtn = document.getElementById('view-resume-btn');
  const resumeModal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-modal-close');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.add('active');
    });
  }

  if (closeBtn && resumeModal) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   7. Contact Form & Scroll Animations
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBanner = document.getElementById('contact-success-banner');
  const successMsgText = document.getElementById('success-msg-text');
  const successMailtoBtn = document.getElementById('success-mailto-btn');
  const resetBtn = document.getElementById('reset-contact-form-btn');
  const copyBtn = document.getElementById('copy-email-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit-btn');
      const name = document.getElementById('form-name')?.value.trim() || 'Visitor';
      const email = document.getElementById('form-email')?.value.trim() || '';
      const message = document.getElementById('form-message')?.value.trim() || '';

      if (!name || !email || !message) return;

      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Dispatch Message ↗';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message... ⚡';
      }

      const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nProject Details / Inquiry:\n${message}`);
      const mailtoUrl = `mailto:vsbsujit883@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

      try {
        await fetch('https://formsubmit.co/ajax/7bc28caf3b4965d55690856c48149e5b', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `New Portfolio Inquiry from ${name}`
          })
        });
      } catch (err) {
        console.warn('FormSubmit notice:', err);
      }

      // Hide form, display success banner
      form.style.display = 'none';
      if (successBanner) {
        successBanner.style.display = 'block';
        if (successMsgText) {
          successMsgText.innerHTML = `Thank you <strong>${name}</strong>! Your inquiry has been sent to <strong>vsbsujit883@gmail.com</strong>. You can also open your email app directly using the button below.`;
        }
        if (successMailtoBtn) {
          successMailtoBtn.href = mailtoUrl;
        }
      }

      showToast(`Thank you ${name}! Message dispatched to vsbsujit883@gmail.com`);

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (form) {
        form.reset();
        form.style.display = 'block';
      }
      if (successBanner) {
        successBanner.style.display = 'none';
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', async (e) => {
      const email = PORTFOLIO_DATA?.personalInfo?.links?.email || 'vsbsujit883@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const tmp = document.createElement('input');
        tmp.value = email;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        tmp.remove();
      }

      showToast(`Email address vsbsujit883@gmail.com copied to clipboard!`);
    });
  }
}

function initScrollAnimations() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('.site-header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScrollable > 0 && progressBar) {
      const percentage = (window.scrollY / totalScrollable) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    }

    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.editorial-section-header, .hero-main-content, .hero-sidebar, .background-card, .learning-card, .project-card, .skill-card, .cert-card, .contact-info-box, .contact-form-box').forEach((el, idx) => {
    if (!el.classList.contains('reveal-on-scroll')) {
      el.classList.add('reveal-on-scroll');
      el.classList.add(`stagger-${(idx % 4) + 1}`);
    }
    observer.observe(el);
  });
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}
