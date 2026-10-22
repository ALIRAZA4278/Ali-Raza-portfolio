import { skillGroups, specializations } from '../data/site';

const allSkills = skillGroups.flatMap((group) => group.skills);
const half = Math.ceil(allSkills.length / 2);
const rows = [allSkills.slice(0, half), allSkills.slice(half)];

// One marquee row: the list twice, so the loop has no seam. The copy is hidden from screen readers.
function Marquee({ items, reverse }) {
  return (
    <div className={`marquee${reverse ? ' marquee--reverse' : ''}`}>
      <div className="marquee__track">
        <ul className="marquee__group">
          {items.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
        <ul className="marquee__group" aria-hidden="true">
          {items.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section stack">
      <div className="wrap stack__head" data-reveal-group>
        <h2 id="skills-title" className="section-title" data-reveal>
          My <span className="accent">skills</span>
        </h2>
      </div>

      <Marquee items={rows[0]} />
      <Marquee items={rows[1]} reverse />

      <div className="wrap">
        <div className="skill-cards" data-reveal-group>
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card" data-reveal data-spotlight>
              <h3>{group.title}</h3>
              <p>{group.note}</p>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <p className="stack__also lead" data-reveal-group>
          <span data-reveal>
            I specialise in {specializations.slice(0, -1).join(', ')} and {specializations.at(-1)}.
            Currently learning agentic AI.
          </span>
        </p>
      </div>
    </section>
  );
}
