import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const containerRef = useRef(null);

  const rawText = "B.Tech CSIT student at K L University working across Python, full-stack development, databases, and machine learning — not as separate boxes to check, but as one connected skill set I'm applying to real builds, from web apps to data-driven tools.";
  const words = rawText.split(/\s+/);
  const limeHighlights = ["Python,", "full-stack", "databases,", "machine", "learning", "one", "connected", "skill", "set", "real", "builds,"];

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (!container) return;

    const wordEls = container.querySelectorAll('.manifesto-word');

    if (isReducedMotion) {
      wordEls.forEach(el => el.classList.add('active'));
      return;
    }

    const resetWords = () => {
      wordEls.forEach(span => span.classList.remove('active', 'lime-accent'));
    };

    const tl = gsap.timeline({ paused: true });

    wordEls.forEach((span, idx) => {
      const isLime = span.getAttribute('data-accent') === 'lime';
      tl.call(() => {
        if (isLime) {
          span.classList.add('lime-accent');
        } else {
          span.classList.add('active');
        }
      }, null, idx * 0.048);
    });

    const st = ScrollTrigger.create({
      trigger: '#manifesto',
      start: 'top 80%',
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => {
        tl.pause(0);
        resetWords();
      }
    });

    // If section is already in viewport on mount, trigger fill immediately
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      tl.play();
    }

    return () => {
      st.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className="manifesto-section" id="manifesto">
      <div className="container">
        <span className="manifesto-badge">// CORE PHILOSOPHY & CAPABILITY</span>
        <div className="manifesto-text-container" ref={containerRef}>
          <p className="manifesto-heading" id="manifesto-text">
            {words.map((w, i) => (
              <span
                key={i}
                className="manifesto-word"
                data-accent={limeHighlights.includes(w) ? 'lime' : undefined}
              >
                {w}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

