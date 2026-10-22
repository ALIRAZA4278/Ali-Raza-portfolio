'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BrowserFrame from '../../components/BrowserFrame';
import {
  personalProjects,
  clientProjects,
  allProjects,
  filterCategories,
  splitTitle,
  domainOf,
  hasLink,
  metaLine
} from '../../data/projects';
import { gsap, SplitText, useGSAP, MOTION_OK } from '../../lib/gsap';
import { scrollToY } from '../../lib/scroll';

const countFor = (category) =>
  category === 'All' ? allProjects.length : allProjects.filter((p) => p.categories.includes(category)).length;

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const root = useRef(null);
  const list = useRef(null);

  // With the bar pinned, a new filter would otherwise leave you mid-list
  const chooseFilter = (category) => {
    setFilter(category);
    const top = list.current?.getBoundingClientRect().top ?? 0;
    const bar = document.querySelector('.filterbar')?.offsetHeight ?? 0;
    const nav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
    if (top < nav + bar) scrollToY(window.scrollY + top - nav - bar - 8);
  };

  // Arriving from a button lower down the home page: start at the top
  useEffect(() => {
    if (!window.location.hash) scrollToY(0, { immediate: true });
  }, []);

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter((project) => project.categories.includes(filter));

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.archive__title', { type: 'chars', charsClass: 'char', mask: 'chars' });
      gsap.from(split.chars, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.04 });
      gsap.from('[data-archive-fade]', { y: 24, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 0.3 });
      return () => split.revert();
    });
  }, { scope: root });

  // Entries rise in each time the filter changes
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray('.entry').forEach((entry) => {
        gsap.from(entry.children, {
          y: 28,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: entry, start: 'top 88%', once: true }
        });
      });
    });
  }, { scope: root, dependencies: [filter], revertOnUpdate: true });

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content" ref={root} className="wrap">
        <header className="archive__head">
          <h1 className="archive__title display">All <span className="accent">projects</span></h1>
          <div className="archive__intro">
            <p className="lead" data-archive-fade>
              Everything I&apos;ve built across personal projects, client work and hackathons, from
              AI-powered platforms to full-stack apps.
            </p>
            <p className="small muted" data-archive-fade>
              {personalProjects.length} personal · {clientProjects.length} client and company · 4+ years
            </p>
          </div>
        </header>

        {/* Outside the header so it can stay pinned under the navbar for the whole list */}
        <div className="filterbar" data-archive-fade>
          <ul className="filters" aria-label="Filter projects by category">
            {filterCategories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  aria-pressed={filter === category}
                  onClick={() => chooseFilter(category)}
                >
                  {category}<span>{countFor(category)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>

        <ul className="entries" ref={list}>
          {filteredProjects.map((project, index) => {
            const { name, tagline } = splitTitle(project.title);
            const flag = project.achievement || project.highlight;
            return (
              <li key={project.id} className="entry">
                <BrowserFrame url={project.live} label={name} className="entry__shot">
                  <Image
                    src={project.image}
                    alt={`${name} website, home page`}
                    fill
                    sizes="(max-width: 860px) 100vw, 50vw"
                    priority={filter === 'All' && index < 2}
                  />
                </BrowserFrame>
                <div className="entry__text">
                  <p className="entry__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                    <span> / {String(filteredProjects.length).padStart(2, '0')}</span>
                  </p>
                  <h2 className="entry__title display">{name}</h2>
                  {tagline && <p className="lead">{tagline}</p>}
                  <p className="entry__meta">
                    {metaLine(project)}
                  </p>
                  {flag && <p className="entry__flag">{flag}</p>}
                  <p>{project.description}</p>
                  <p className="entry__tech">{project.technologies.join(' · ')}</p>
                  <div className="entry__links">
                    {hasLink(project.live) && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        {domainOf(project.live)} ↗
                      </a>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {filteredProjects.length === 0 && (
          <div className="entries__empty">
            <h2 className="section-title">No projects here yet</h2>
            <p>Try a different category.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
