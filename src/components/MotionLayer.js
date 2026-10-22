'use client';

import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from '../lib/gsap';

// Page-wide scroll motion. Content is fully visible without it:
// every tween starts from a hidden state only once this script runs.
export default function MotionLayer() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      // Entrance for the parts of each section, in order
      gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
        const parts = group.querySelectorAll('[data-reveal]');
        if (!parts.length) return;
        gsap.from(parts, {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.075,
          scrollTrigger: { trigger: group, start: 'top 82%', once: true }
        });
      });

      // The About statement lights up word by word as it is read
      gsap.utils.toArray('[data-scrub-words]').forEach((el) => {
        const split = SplitText.create(el, { type: 'words', wordsClass: 'word' });
        gsap.fromTo(split.words, { opacity: 0.18 }, {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 45%', scrub: true }
        });
      });

      // Large figures count up from zero
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const counter = { value: 0 };
        gsap.to(counter, {
          value: end,
          duration: 1.6,
          ease: 'power2.out',
          snap: { value: 1 },
          onUpdate: () => { el.textContent = `${counter.value}${suffix}`; },
          scrollTrigger: { trigger: el, start: 'top 90%', once: true }
        });
      });

      // The figure on the photograph rises into place
      gsap.utils.toArray('[data-figure-shot]').forEach((shot) => {
        gsap.fromTo(shot.querySelector('img'), { scale: 1.1 }, {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: shot, start: 'top bottom', end: 'bottom top', scrub: true }
        });
        gsap.from(shot.querySelector('[data-figure-num]'), {
          yPercent: 60,
          autoAlpha: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: shot, start: 'top 60%', once: true }
        });
      });
    });

    // Layout shifts from fonts and images can move trigger points
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    return () => window.removeEventListener('load', refresh);
  });

  return null;
}
