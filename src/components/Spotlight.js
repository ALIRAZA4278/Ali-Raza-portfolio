'use client';

import { useEffect } from 'react';

// Feeds the pointer position to any [data-spotlight] element as --mx / --my,
// which the CSS turns into a soft glow that follows the mouse.
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const onMove = (e) => {
      const el = e.target.closest?.('[data-spotlight]');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return null;
}
