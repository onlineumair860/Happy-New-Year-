import React, { useEffect, useRef } from 'react';
import { soundEffects } from '../utils/audio';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
  flicker: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  trail: { x: number; y: number }[];
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

const PALETTES = [
  // Luxury Gold & Champagne
  ['#FFFBEB', '#FDE68A', '#F59E0B', '#D97706', '#B45309'],
  // Festive Royal Crimson & Gold
  ['#FDE68A', '#F59E0B', '#EF4444', '#DC2626', '#FECDD3'],
  // Midnight Sapphire & Gold
  ['#60A5FA', '#93C5FD', '#FCD34D', '#F59E0B', '#E0F2FE'],
  // Emerald & Amber
  ['#34D399', '#10B981', '#FBBF24', '#F59E0B', '#D1FAE5'],
  // Violet & Gold
  ['#C084FC', '#A855F7', '#FDE68A', '#F59E0B', '#FAF5FF'],
];

export const FireworksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];
    const stars: Star[] = [];

    // Initialize floating ambient stars
    for (let i = 0; i < 70; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const createExplosion = (x: number, y: number, customPalette?: string[]) => {
      const palette = customPalette || PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const count = Math.min(width < 768 ? 50 : 85, 100);
      
      soundEffects.playFireworkPop();

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.2 - 0.1);
        const speed = Math.random() * 5 + 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012,
          color: palette[Math.floor(Math.random() * palette.length)],
          size: Math.random() * 2.2 + 1.2,
          flicker: Math.random() > 0.4,
        });
      }
    };

    const launchRocket = (startX?: number, targetX?: number, targetY?: number) => {
      const x = startX ?? Math.random() * (width * 0.7) + width * 0.15;
      const destY = targetY ?? Math.random() * (height * 0.45) + height * 0.1;
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      
      rockets.push({
        x,
        y: height,
        targetY: destY,
        vx: targetX ? (targetX - x) / 45 : (Math.random() - 0.5) * 1.5,
        vy: - (Math.random() * 3 + 8),
        color: palette[1],
        trail: [],
      });
    };

    // User click triggers immediate celebration rocket to that position
    const handleCanvasClick = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      createExplosion(clientX, clientY);
    };

    window.addEventListener('click', handleCanvasClick);

    // Auto launcher timer
    let lastLaunch = Date.now();
    let launchInterval = 1800; // Launch every ~1.8s

    let animationFrameId: number;

    const render = () => {
      // Midnight dark trail clearing for luminous firework trails
      ctx.fillStyle = 'rgba(3, 7, 18, 0.24)';
      ctx.fillRect(0, 0, width, height);

      // Render floating stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        ctx.fillStyle = `rgba(254, 243, 199, ${star.alpha * (0.6 + 0.4 * Math.sin(Date.now() * 0.003 + i))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Check auto rocket launch
      const now = Date.now();
      if (now - lastLaunch > launchInterval) {
        launchRocket();
        lastLaunch = now;
        launchInterval = Math.random() * 1400 + 1200;
      }

      // Update and draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.08; // Slight gravity

        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 6) r.trail.shift();

        // Draw trail
        ctx.beginPath();
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2;
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          if (t === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Check if rocket reached its peak/target
        if (r.vy >= -1 || r.y <= r.targetY) {
          createExplosion(r.x, r.y);
          rockets.splice(i, 1);
        }
      }

      // Update and draw explosion particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // Gravity
        p.vx *= 0.98; // Drag
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.5 : p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
};
