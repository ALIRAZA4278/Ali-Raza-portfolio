'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { contact } from '../data/site';

const navLinks = [
  { name: 'Work', id: 'work' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Highlight the section currently in view
  useEffect(() => {
    // 'home' has no link; observing it clears the highlight at the top
    const sections = ['home', ...navLinks.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the sheet on Escape and keep the page still behind it
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav__mark">Ali Raza</Link>

        <ul className="nav__links">
          {navLinks.map(({ name, id }) => (
            <li key={id}>
              <a href={`/#${id}`} aria-current={activeSection === id ? 'true' : undefined}>
                {name}
              </a>
            </li>
          ))}
        </ul>

        <a href={contact.resume} download="Ali-Raza-Resume.pdf" className="btn nav__cta">
          Download résumé
        </a>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="nav-sheet"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={`burger${isMenuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
      </nav>

      <div id="nav-sheet" className={`nav__sheet${isMenuOpen ? ' is-open' : ''}`} aria-hidden={!isMenuOpen}>
        <ul>
          {navLinks.map(({ name, id }) => (
            <li key={id}>
              <a href={`/#${id}`} onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1}>
                {name}
              </a>
            </li>
          ))}
          <li>
            <a href="/projects" onClick={() => setIsMenuOpen(false)} tabIndex={isMenuOpen ? 0 : -1}>
              All projects
            </a>
          </li>
        </ul>
        <a
          href={contact.resume}
          download="Ali-Raza-Resume.pdf"
          className="btn"
          tabIndex={isMenuOpen ? 0 : -1}
        >
          Download résumé
        </a>
      </div>
    </header>
  );
}
