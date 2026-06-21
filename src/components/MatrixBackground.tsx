"use client";

import { useEffect, useRef } from "react";

// Code-flavored glyph set instead of the original Cyrillic payload — ties the
// rain to the site's "systems/terminal" theme rather than a generic matrix look.
const RAIN_CHARS = "01{}<>/=;:+-*#@$%λΣπ01010101".split("");
const TRAIL_CHARS = "01{}<>/=#@λΣ".split("");
const SIGNAL = "0, 255, 163"; // matches the --signal accent used across the site

type TrailParticle = {
  x: number;
  y: number;
  char: string;
  size: number;
  alpha: number;
  speed: number;
};

export default function MatrixBackground() {
  const rainRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return; // leave both canvases blank — plain dark background only

    const rainCanvas = rainRef.current;
    const trailCanvas = trailRef.current;
    if (!rainCanvas || !trailCanvas) return;
    const rainCtx = rainCanvas.getContext("2d");
    const trailCtx = trailCanvas.getContext("2d");
    if (!rainCtx || !trailCtx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const fontSize = 15;
    let columns = Math.max(1, Math.floor(width / fontSize));
    let drops: number[] = new Array(columns).fill(1).map(() => Math.random() * -40);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      rainCanvas!.width = width;
      rainCanvas!.height = height;
      trailCanvas!.width = width;
      trailCanvas!.height = height;
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = new Array(columns).fill(1).map(() => Math.random() * -40);
    }
    resize();
    window.addEventListener("resize", resize);

    // --- ambient rain, low contrast so page text always stays legible ---
    let rainTimer: ReturnType<typeof setInterval> | null = null;
    function drawRain() {
      rainCtx!.fillStyle = "rgba(10, 14, 15, 0.06)";
      rainCtx!.fillRect(0, 0, width, height);
      rainCtx!.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)];
        const fade = Math.random() * 0.25 + 0.12; // 0.12–0.37 alpha, kept dim on purpose
        rainCtx!.fillStyle = `rgba(${SIGNAL}, ${fade})`;
        rainCtx!.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    // --- interactive trail that follows the cursor ---
    let particles: TrailParticle[] = [];
    function onMouseMove(e: MouseEvent) {
      particles.push({
        x: e.clientX + (Math.random() * 16 - 8),
        y: e.clientY,
        char: TRAIL_CHARS[Math.floor(Math.random() * TRAIL_CHARS.length)],
        size: Math.floor(Math.random() * 8) + 11,
        alpha: 0.9,
        speed: Math.random() * 1.3 + 0.6,
      });
      if (particles.length > 90) particles.splice(0, particles.length - 90);
    }

    let trailFrame = 0;
    function animateTrail() {
      trailCtx!.clearRect(0, 0, width, height);
      particles = particles.filter((p) => p.alpha > 0);
      for (const p of particles) {
        p.y -= p.speed;
        p.alpha -= 0.014;
        const a = Math.max(p.alpha, 0);
        trailCtx!.save();
        trailCtx!.font = `${p.size}px monospace`;
        trailCtx!.shadowColor = `rgba(${SIGNAL}, ${a * 0.8})`;
        trailCtx!.shadowBlur = p.size / 2;
        trailCtx!.fillStyle = `rgba(${SIGNAL}, ${a})`;
        trailCtx!.fillText(p.char, p.x, p.y);
        trailCtx!.restore();
      }
      trailFrame = requestAnimationFrame(animateTrail);
    }

    let running = true;
    function startLoops() {
      if (!running) return;
      rainTimer = setInterval(drawRain, 75);
      trailFrame = requestAnimationFrame(animateTrail);
      window.addEventListener("mousemove", onMouseMove);
    }
    function stopLoops() {
      if (rainTimer) clearInterval(rainTimer);
      cancelAnimationFrame(trailFrame);
      window.removeEventListener("mousemove", onMouseMove);
    }

    // pause when the tab isn't visible to save battery/CPU
    function onVisibility() {
      if (document.hidden) {
        stopLoops();
      } else {
        startLoops();
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    startLoops();

    return () => {
      running = false;
      stopLoops();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <canvas ref={rainRef} className="block" />
      </div>
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
        <canvas ref={trailRef} className="block" />
      </div>
    </>
  );
}
