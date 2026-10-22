import { currentRole, freelanceHighlights, freelanceSince } from '../data/site';
import { domainOf } from '../data/projects';

// One current job, shown as a feature card with its products or projects linked
function RoleCard({ mark, role, items, itemsLabel }) {
  return (
    <article className="xp-role" data-reveal-group data-spotlight>
      <header className="xp-role__head" data-reveal>
        <span className="xp-role__mark" aria-hidden="true">{mark}</span>
        <div className="xp-role__who">
          <h3>{role.title}</h3>
          <p>{role.company} · {role.location} · {role.period}</p>
        </div>
        <span className="xp-role__now">
          <span className="hero__badge-dot" aria-hidden="true" />
          Current
        </span>
      </header>
      <p className="xp-role__desc" data-reveal>{role.description}</p>

      <ul className="xp-products" aria-label={itemsLabel}>
        {items.map((item) => (
          <li key={item.name} data-reveal>
            <a
              className="xp-product"
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              data-spotlight
            >
              <span className="xp-product__name">{item.name}</span>
              <span className="xp-product__role">{item.role}</span>
              <span className="xp-product__go">{domainOf(item.website)} ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section section--line wrap">
      <div className="xp__head" data-reveal-group>
        <h2 id="experience-title" className="section-title" data-reveal>
          Work <span className="accent">experience</span>
        </h2>
        <p className="lead" data-reveal>
          Building SaaS products at {currentRole.company}, plus freelance projects for clients in
          the USA and Australia since {freelanceSince}.
        </p>
      </div>

      <div className="xp-roles">
        <RoleCard mark="MS" role={currentRole} items={currentRole.products} itemsLabel="Products" />
      </div>

      <div className="xp-free" data-reveal-group>
        <h3 className="xp-free__title" data-reveal>
          Freelance <span className="muted">· {freelanceSince} – Present · 5+ clients across different industries</span>
        </h3>
        <ul className="xp-free__grid">
          {freelanceHighlights.map((item) => {
            const Card = item.website ? 'a' : 'div';
            const linkProps = item.website
              ? { href: item.website, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <li key={item.name} data-reveal>
                <Card className={`xp-free__card${item.website ? ' is-link' : ''}`} data-spotlight {...linkProps}>
                  <span className="xp-free__name">{item.name}</span>
                  <span className="xp-free__note">{item.note}</span>
                  {item.website && <span className="xp-free__go">{domainOf(item.website)} ↗</span>}
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
