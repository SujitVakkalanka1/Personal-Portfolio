import React, { useEffect, useRef } from 'react';

export default function CursorBadge() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let targetScale = 0;
    let curScale = 0;
    let animId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleMouseEnter = () => { targetScale = 1; };
    const handleMouseLeave = () => { targetScale = 0; };

    // Function to attach listeners to view elements
    const attachListeners = () => {
      const targets = document.querySelectorAll('[data-cursor-view], .project-card, .accordion-panel');
      targets.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    
    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const loop = () => {
      animId = requestAnimationFrame(loop);
      curX += (mouseX - curX) * 0.1;
      curY += (mouseY - curY) * 0.1;
      curScale += (targetScale - curScale) * 0.15;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) scale(${curScale})`;
      }
    };
    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="cursor-badge" ref={badgeRef} id="cursor-badge" aria-hidden="true">
      <span className="badge-icon">↗</span>
      <span className="badge-divider">|</span>
      <span className="badge-text">VIEW</span>
    </div>
  );
}

