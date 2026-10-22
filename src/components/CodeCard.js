import { allProjects } from '../data/projects';
import { currentRole } from '../data/site';

// A small editor window that "types out" real facts. Each line is a list of
// [text, token type] pairs so the syntax colours stay readable in markup.
const lines = [
  [['const ', 'kw'], ['ali', 'var'], [' = {', 'punc']],
  [['  role', 'key'], [': ', 'punc'], [`"${currentRole.title}"`, 'str'], [',', 'punc']],
  [['  company', 'key'], [': ', 'punc'], [`"${currentRole.company}"`, 'str'], [',', 'punc']],
  [['  location', 'key'], [': ', 'punc'], ['"Karachi, PK"', 'str'], [',', 'punc']],
  [['  stack', 'key'], [': [', 'punc'], ['"Next.js"', 'str'], [', ', 'punc'], ['"React"', 'str'], [', ', 'punc'], ['"MERN"', 'str'], ['],', 'punc']],
  [['  ai', 'key'], [': [', 'punc'], ['"OpenAI"', 'str'], [', ', 'punc'], ['"Gemini"', 'str'], ['],', 'punc']],
  [['  projectsShipped', 'key'], [': ', 'punc'], [String(allProjects.length), 'num'], [',', 'punc']],
  [['  available', 'key'], [': ', 'punc'], ['true', 'kw'], [',', 'punc']],
  [['};', 'punc']],
];

export default function CodeCard() {
  return (
    <figure className="code-card" aria-label="About Ali, written as code">
      <div className="code-card__bar" aria-hidden="true">
        <span className="browser__dots"><i /><i /><i /></span>
        <span className="code-card__file">ali-raza.ts</span>
      </div>
      <pre className="code-card__body"><code>
        {lines.map((tokens, i) => (
          <span key={i} className="code-card__line" data-code-line>
            <span className="code-card__num" aria-hidden="true">{i + 1}</span>
            {tokens.map(([text, type], j) => (
              <span key={j} className={`tok-${type}`}>{text}</span>
            ))}
            {i === lines.length - 1 && <span className="code-card__caret" aria-hidden="true" />}
            {'\n'}
          </span>
        ))}
      </code></pre>
    </figure>
  );
}
