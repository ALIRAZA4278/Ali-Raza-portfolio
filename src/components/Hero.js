'use client';

import { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Magnetic from './Magnetic';
import KarachiTime from './KarachiTime';
import CodeCard from './CodeCard';
import HeroField from './HeroField';
import { allProjects } from '../data/projects';
import { contact, socialLinks } from '../data/site';
import { gsap, SplitText, useGSAP, MOTION_OK } from '../lib/gsap';

const socialIcons = { GitHub: FaGithub, LinkedIn: FaLinkedinIn, X: FaXTwitter, Instagram: FaInstagram };
const heroSocials = [
  ...socialLinks.map(({ label, href }) => ({ label, href, Icon: socialIcons[label] })),
  { label: 'WhatsApp', href: contact.whatsappChat, Icon: FaWhatsapp }
].filter(({ Icon }) => Icon);

const stats = [
  { value: 4, suffix: '+', label: 'Years building' },
  { value: allProjects.length, suffix: '', label: 'Projects' },
  { value: 5, suffix: '+', label: 'Clients' }
];

export default function Hero() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.hero__title-text', { type: 'chars', charsClass: 'char', mask: 'chars' });
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from(split.chars, { yPercent: 110, duration: 1.2, stagger: 0.05 })
        .from('[data-hero-fade]', { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.07 }, '-=0.9')
        .from('.code-card', { y: 30, autoAlpha: 0, duration: 1 }, '-=0.9')
        .from('[data-code-line]', { x: -10, autoAlpha: 0, duration: 0.4, stagger: 0.09, ease: 'power2.out' }, '-=0.5');

      // the text drifts up a little faster than the page as the hero leaves
      gsap.to('.hero__inner', {
        yPercent: -8,
        autoAlpha: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });

      return () => split.revert();
    });
  }, { scope: root });

  return (
    <section id="home" className="hero" ref={root} aria-labelledby="hero-title">
      <HeroField />

      <div className="hero__inner wrap">
        <div className="hero__main">
          <div className="hero__pills" data-hero-fade>
            <p className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Available for freelance and full-time roles
            </p>
            <p className="hero__time"><KarachiTime compact /></p>
          </div>

          <h1 id="hero-title" className="hero__title display">
            <span className="hero__title-text">Ali Raza</span>
          </h1>

          <p className="hero__role" data-hero-fade>
            <span>Software Engineer</span> at MS Capital Soft
          </p>
          <p className="hero__lead" data-hero-fade>
            I build stores, booking sites and AI tools that real businesses run on, from Secret
            Hour in Pakistan to Connectiva in Switzerland, and ship SaaS features for Adspoke,
            ActiveCalculator and Selvo.
          </p>

          <div className="hero__actions" data-hero-fade>
            <Magnetic>
              <a href="#contact" className="btn btn--arrow">Start a project</a>
            </Magnetic>
            <a href="#work" className="btn btn--ghost">See my work</a>
          </div>

          <ul className="hero__socials" aria-label="Find me online" data-hero-fade>
            {heroSocials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__side">
          <CodeCard />
          <dl className="hero__stats" data-hero-fade>
            {stats.map(({ value, suffix, label }) => (
              <div key={label} data-spotlight>
                <dt>{label}</dt>
                <dd data-count={value} data-suffix={suffix}>{value}{suffix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to selected work">
        <span>Scroll</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
