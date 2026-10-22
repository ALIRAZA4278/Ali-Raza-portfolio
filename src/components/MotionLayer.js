'use client';

import { gsap, ScrollTrigger, SplitText, useGSAP, MOTION_OK } from '../lib/gsap';

const STACK_MQ = '(min-width: 1101px) and (prefers-reduced-motion: no-preference)';

// Page-wide scroll motion. Content is fully visible without it:
// every tween starts from a hidden state only once this script runs.
export default function MotionLayer() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      // Entrance for the parts of each section, in order
      // The service cards get their own stacked motion on wide screens (below)
      const stacking = window.matchMedia(STACK_MQ).matches;
      gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
        const parts = [...group.querySelectorAll('[data-reveal]')]
          .filter((el) => !(stacking && el.closest('[data-service-stack] .services')));
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

      // The pinned statement: words go from dim to full as the section scrolls past
      gsap.utils.toArray('[data-statement]').forEach((section) => {
        const text = section.querySelector('[data-statement-text]');
        const split = SplitText.create(text, { type: 'words', wordsClass: 'word' });
        const pinned = getComputedStyle(section.firstElementChild).position === 'sticky';
        gsap.fromTo(split.words, { opacity: 0.14 }, {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: pinned
            ? { trigger: section, start: 'top top', end: 'bottom bottom', scrub: true }
            : { trigger: text, start: 'top 80%', end: 'bottom 45%', scrub: true }
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
        // The screenshot grows from a small tilted card to full size as the section comes in
        const frame = shot.querySelector('.proof__shot');
        if (frame) {
          gsap.fromTo(frame, { scale: 0.72, rotation: -4, transformOrigin: '50% 100%' }, {
            scale: 1,
            rotation: 0,
            ease: 'none',
            scrollTrigger: { trigger: shot, start: 'top bottom', end: 'center 55%', scrub: true }
          });
        }
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

    // "What I build": the cards are dealt onto a pinned stack, one per stretch of scroll
    mm.add(STACK_MQ, () => {
      const section = document.querySelector('[data-service-stack]');
      if (!section) return;
      const cards = gsap.utils.toArray(section.querySelectorAll('.service'));
      const tilt = [-2.5, 1.8, -1.6, 2.2];
      section.classList.add('is-stacked');

      gsap.set(cards, { filter: 'brightness(1)', zIndex: (i) => i + 1, rotation: (i) => tilt[i % tilt.length], transformOrigin: '50% 100%' });
      gsap.set(cards.slice(1), { yPercent: 230, rotation: (i) => tilt[(i + 1) % tilt.length] * 3 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6 }
      });
      cards.slice(1).forEach((card, i) => {
        const at = i;
        tl.to(card, { yPercent: 0, rotation: tilt[(i + 1) % tilt.length], ease: 'power2.out', duration: 1 }, at);
        // everything already on the stack sinks back a little
        tl.to(cards.slice(0, i + 1), { scale: (j) => 1 - (i + 1 - j) * 0.04, filter: 'brightness(0.7)', ease: 'none', duration: 1 }, at);
      });
      tl.to({}, { duration: 0.4 });
      ScrollTrigger.refresh();

      return () => {
        section.classList.remove('is-stacked');
        gsap.set(cards, { clearProps: 'all' });
      };
    });

    // Layout shifts from fonts and images can move trigger points
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    return () => window.removeEventListener('load', refresh);
  });

  return null;
}
