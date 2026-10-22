'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

// Pulls its child a few pixels toward the pointer (fine pointers, motion allowed)
export default function Magnetic({ children, strength = 0.25 }) {
  const root = useRef(null);

  useGSAP(() => {
    const el = root.current;
    const mm = gsap.matchMedia();
    mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        xTo((e.clientX - (rect.left + rect.width / 2)) * strength);
        yTo((e.clientY - (rect.top + rect.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
      };
    });
  }, { scope: root });

  return (
    <span ref={root} style={{ display: 'inline-block' }}>
      {children}
    </span>
  );
}
