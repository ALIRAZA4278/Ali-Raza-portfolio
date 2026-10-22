'use client';

import { useEffect } from 'react';

// When the home page opens on a link like /#about (from /projects, or a shared
// link), the browser jumps to the section before the page has finished laying
// out: the work showcase grows, fonts and images settle, and the section moves.
// This re-aligns it a few times while the page settles, and stops as soon as
// the visitor scrolls on their own.
export default function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let cancelled = false;
    const stop = () => { cancelled = true; };
    const userEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    userEvents.forEach((type) => window.addEventListener(type, stop, { passive: true, once: true }));

    const align = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'instant' });
    };

    const frame = requestAnimationFrame(align);
    const timers = [250, 700, 1500].map((ms) => setTimeout(align, ms));
    window.addEventListener('load', align, { once: true });
    document.fonts?.ready.then(align);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      window.removeEventListener('load', align);
      userEvents.forEach((type) => window.removeEventListener(type, stop));
    };
  }, []);

  return null;
}
