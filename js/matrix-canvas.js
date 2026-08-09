/**
 * Interactive Cyber Dot-Matrix & Constellation Canvas
 * Renders an ambient glowing matrix grid with dynamic cursor proximity connections
 */

(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let dots = [];
  const dotSpacing = 36;
  const dotRadius = 1.4;

  let mouse = {
    x: -1000,
    y: -1000,
    radius: 170
  };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initDots();
  }

  function initDots() {
    dots = [];
    const cols = Math.ceil(width / dotSpacing);
    const rows = Math.ceil(height / dotSpacing);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({
          x: i * dotSpacing + 18,
          y: j * dotSpacing + 18,
          baseAlpha: 0.18,
          alpha: 0.18,
          scale: 1
        });
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const dotColor = isDark ? '243, 244, 246' : '26, 26, 26';
    const highlightRust = isDark ? '224, 90, 54' : '154, 52, 18';
    const highlightSecondary = isDark ? '245, 158, 11' : '4, 120, 87';

    // Draw grid dots & dynamic proximity connections
    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];
      const dx = mouse.x - dot.x;
      const dy = mouse.y - dot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const factor = 1 - dist / mouse.radius;
        dot.alpha = dot.baseAlpha + factor * 0.75;
        dot.scale = 1 + factor * 1.8;

        // Draw dynamic connection line to cursor
        ctx.strokeStyle = `rgba(${highlightRust}, ${factor * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${highlightRust}, ${dot.alpha})`;
      } else {
        dot.alpha += (dot.baseAlpha - dot.alpha) * 0.1;
        dot.scale += (1 - dot.scale) * 0.1;
        ctx.fillStyle = `rgba(${dotColor}, ${dot.alpha})`;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotRadius * dot.scale, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  resize();
  animate();
})();
