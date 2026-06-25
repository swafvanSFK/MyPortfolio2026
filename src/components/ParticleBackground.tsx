import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Handle Resize via ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timer: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        // Debounce resize updates slightly for performance
        clearTimeout(timer);
        timer = setTimeout(() => {
          setDimensions({ width, height });
        }, 100);
      }
    });

    resizeObserver.observe(container);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Sync canvas dimensions
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
  }, [dimensions]);

  // Particle simulation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Build particle array
    const particleCount = Math.min(60, Math.floor((dimensions.width * dimensions.height) / 18000));
    const particles: Particle[] = [];

    // Colors: Neon Lime, White, and subtle green/white accents
    const colors = [
      'rgba(204, 255, 0, 0.45)', // Neon Lime
      'rgba(255, 255, 255, 0.45)', // Pure White
      'rgba(204, 255, 0, 0.2)'  // Translucent Lime
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw background glow base
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Mouse interactive glow
      if (mouseRef.current.x >= 0 && mouseRef.current.y >= 0) {
        const radialGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 160
        );
        radialGlow.addColorStop(0, 'rgba(204, 255, 0, 0.08)');
        radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radialGlow;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 160, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off bounds
        if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

        // Mouse push-pull interaction
        if (mouseRef.current.x >= 0 && mouseRef.current.y >= 0) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            // Push particle gently away
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 0.6;
            p.y += (dy / dist) * force * 0.6;
          }
        }

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw web lines to neighbor particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            const alpha = (100 - dist) / 100 * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  // Track mouse position over canvas
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto"
      style={{ zIndex: 0 }}
      id="particles-container"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60 transition-opacity duration-1000"
      />
    </div>
  );
}
