import { FaShoppingBag, FaCalendarCheck, FaRobot, FaLayerGroup } from 'react-icons/fa';
import { allProjects, splitTitle, hasLink } from '../data/projects';
import { currentRole } from '../data/site';

// Each service is backed by projects that are on this site; the examples link to them.
const byTitle = (start) => allProjects.find((p) => p.title.startsWith(start));
const project = (start) => {
  const p = byTitle(start);
  return p ? { name: p.shortTitle ?? splitTitle(p.title).name, href: hasLink(p.live) ? p.live : null } : null;
};
const product = (name) => {
  const p = currentRole.products.find((x) => x.name === name);
  return p ? { name: p.name, href: p.website } : null;
};

const services = [
  {
    Icon: FaShoppingBag,
    title: 'Online stores',
    text: 'Stores with product catalogues, carts, offers, payments and admin dashboards, built to take real orders.',
    examples: [project('Secret Hour'), project('Cray Stuff'), project('Mohit Computers')]
  },
  {
    Icon: FaCalendarCheck,
    title: 'Business and booking websites',
    text: 'Multi-page sites with services, booking and contact flows, converted pixel-perfect from Figma designs.',
    examples: [project('Quality Care'), project('NDIS Beauty'), project('GracePoint')]
  },
  {
    Icon: FaRobot,
    title: 'AI chatbots and integrations',
    text: 'OpenAI, Gemini and Dialogflow built into products, from report analysers to ordering chatbots.',
    examples: [project('HealthMate'), project('Pizza Ordering'), project('TaskFlow')]
  },
  {
    Icon: FaLayerGroup,
    title: 'Platforms and SaaS features',
    text: 'Directories, job boards and features for SaaS products that serve businesses every day.',
    examples: [project('Connectiva'), product('Adspoke'), product('ActiveCalculator')]
  }
].map((s) => ({ ...s, examples: s.examples.filter(Boolean) }));

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section section--line wrap">
      <div className="services__head" data-reveal-group>
        <h2 id="services-title" className="section-title" data-reveal>
          What I <span className="accent">build</span>
        </h2>
        <p className="lead" data-reveal>
          Four kinds of work I take on, each with live examples you can open.
        </p>
      </div>

      <ul className="services" data-reveal-group>
        {services.map(({ Icon, title, text, examples }) => (
          <li key={title} className="service" data-reveal data-spotlight>
            <span className="service__icon" aria-hidden="true"><Icon /></span>
            <h3 className="service__title">{title}</h3>
            <p className="service__text">{text}</p>
            <p className="service__label">Examples</p>
            <ul className="service__examples">
              {examples.map(({ name, href }) => (
                <li key={name}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">{name} ↗</a>
                  ) : (
                    <span>{name}</span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
