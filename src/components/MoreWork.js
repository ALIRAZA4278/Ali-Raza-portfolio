import Link from 'next/link';
import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import { allProjects, splitTitle, domainOf, hasLink, metaLine } from '../data/projects';

export default function MoreWork() {
  const rest = allProjects.slice(6);
  return (
    <section aria-labelledby="more-title" className="section section--line wrap">
      <div className="more__head" data-reveal-group>
        <h2 id="more-title" className="section-title" data-reveal>
          More <span className="accent">work</span>
        </h2>
        <p className="lead" data-reveal>
          Client sites, company products and projects I built to learn, with live sites on their own domains first.
        </p>
      </div>

      <ul className="work-grid" data-reveal-group>
        {rest.map((project) => {
          const { name } = splitTitle(project.title);
          // Only live sites are linked; a project without one is shown without a link
          const isLinked = hasLink(project.live);
          const Card = isLinked ? 'a' : 'div';
          const linkProps = isLinked
            ? { href: project.live, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <li key={project.id} data-reveal>
              <Card className={`card${isLinked ? ' card--link' : ''}`} data-spotlight {...linkProps}>
                <BrowserFrame url={project.live} label={name} className="card__shot">
                  <Image
                    src={project.image}
                    alt={`${name} website, home page`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </BrowserFrame>
                <div className="card__body">
                  <h3 className="card__title">{name}</h3>
                  <p className="card__meta">{metaLine(project)}</p>
                  <p className="card__desc">{project.description}</p>
                  <span className="card__go">
                    {isLinked ? `${domainOf(project.live)} ↗` : 'No public link'}
                  </span>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="more__foot" data-reveal-group>
        <Link href="/projects" className="btn btn--arrow" data-reveal>
          See all {allProjects.length} projects
        </Link>
        <span className="muted" data-reveal>
          Filter by full-stack, AI, e-commerce, company and freelance work.
        </span>
      </div>
    </section>
  );
}
