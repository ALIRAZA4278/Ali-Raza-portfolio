'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import { allProjects, splitTitle, hasLink, metaLine } from '../data/projects';
import { ScrollTrigger, useGSAP } from '../lib/gsap';

const featured = allProjects.slice(0, 6);

// Wide screens: the section holds still while the page scrolls, the names sit
// on the left and the active project is shown on the right. Narrower screens
// (and no JavaScript) get the projects one after another.
export default function Projects() {
  const showcaseRef = useRef(null);
  const triggerRef = useRef(null);
  const [live, setLive] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1000px)');
    const update = () => setLive(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(() => {
    // The live layout changes the section's height: every trigger below it must re-measure
    if (!live) {
      ScrollTrigger.refresh();
      return;
    }
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64;
    triggerRef.current = ScrollTrigger.create({
      trigger: showcaseRef.current,
      start: `top top+=${navH}`,
      end: 'bottom bottom',
      onUpdate: (self) => {
        setActive(Math.min(featured.length - 1, Math.floor(self.progress * featured.length)));
      }
    });
    ScrollTrigger.refresh();
    return () => { triggerRef.current = null; };
  }, { dependencies: [live], revertOnUpdate: true });

  const goTo = (index) => {
    const st = triggerRef.current;
    if (!st) return;
    const top = st.start + ((index + 0.5) / featured.length) * (st.end - st.start);
    window.scrollTo({ top });
  };

  return (
    <section id="work" aria-labelledby="work-title" className="section" style={{ paddingBottom: 0 }}>
      <div className="wrap work__head" data-reveal-group>
        <h2 id="work-title" className="section-title" data-reveal>
          Selected <span className="accent">work</span>
        </h2>
        <p className="lead" data-reveal>
          Six of {allProjects.length} projects: online stores, a business hub, and client and
          agency websites. Every one is live.
        </p>
      </div>

      <div
        ref={showcaseRef}
        className={`showcase${live ? ' is-live' : ''}`}
        style={{ '--steps': featured.length }}
      >
        {!live && (
          <p className="swipe-hint" aria-hidden="true">Swipe to see all six →</p>
        )}
        <div className="showcase__stage wrap">
          <ul
            className="showcase__nav"
            aria-label="Selected projects"
            style={{ '--progress': (active + 1) / featured.length }}
          >
            {featured.map((project, index) => (
              <li key={project.id}>
                <button
                  type="button"
                  aria-current={live && active === index ? 'true' : undefined}
                  aria-controls={`slide-${project.id}`}
                  onClick={() => goTo(index)}
                >
                  {project.shortTitle ?? splitTitle(project.title).name}
                </button>
              </li>
            ))}
          </ul>

          <div className="showcase__slides">
            {featured.map((project, index) => {
              const { name } = splitTitle(project.title);
              const flag = project.achievement || project.highlight;
              const isActive = !live || active === index;
              return (
                <article
                  key={project.id}
                  id={`slide-${project.id}`}
                  className={`slide${isActive ? ' is-active' : ''}`}
                  aria-labelledby={`work-${project.id}`}
                  aria-hidden={live && !isActive ? 'true' : undefined}
                >
                  <BrowserFrame url={project.live} label={name} className="slide__shot">
                    <Image
                      src={project.image}
                      alt={`${name} website, home page`}
                      fill
                      sizes="(max-width: 999px) 100vw, 56vw"
                      priority={index === 0}
                    />
                  </BrowserFrame>
                  <div className="slide__body">
                    <div>
                      <h3 id={`work-${project.id}`} className="slide__name">{name}</h3>
                      <p className="slide__meta">{metaLine(project)}</p>
                      {flag && <p className="slide__flag">{flag}</p>}
                      <p className="slide__desc">{project.description}</p>
                      <ul className="slide__tech" aria-label="Built with">
                        {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                      </ul>
                    </div>
                    <div className="slide__links">
                      {hasLink(project.live) && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--arrow" tabIndex={live && !isActive ? -1 : undefined}>
                          Visit live site
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
