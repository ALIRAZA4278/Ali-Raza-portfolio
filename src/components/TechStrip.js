import { skillGroups } from '../data/site';

const items = skillGroups.flatMap((group) => group.skills);

// A thin moving strip of the real stack, between the hero and the work.
// Decorative: the same skills are listed in full in the skills section.
export default function TechStrip() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        <ul className="strip__group">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <ul className="strip__group">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
