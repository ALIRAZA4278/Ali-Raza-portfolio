import Image from 'next/image';
import BrowserFrame from './BrowserFrame';
import { allProjects } from '../data/projects';

const healthMate = allProjects.find((p) => p.title.startsWith('HealthMate'));

export default function Proof() {
  return (
    <section aria-labelledby="proof-title" className="section section--line wrap">
      <div className="proof" data-figure-shot>
        <div className="proof__text" data-reveal-group>
          <h2 id="proof-title" className="section-title" data-reveal>
            Saylani <span className="accent">hackathon</span>
          </h2>
          <p className="proof__num display" data-figure-num>
            12h<span className="sr-only"> hours</span>
          </p>
          <p className="lead" data-reveal>
            I built HealthMate in the 12-hour Coding Night 2025 hackathon. Gemini AI reads medical
            reports and explains them in English and Roman Urdu.
          </p>
          <ul className="proof__tech" aria-label="Built with" data-reveal>
            {healthMate.technologies.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </div>
        <figure className="proof__shot">
          <BrowserFrame url={healthMate.live}>
            <Image
              src={healthMate.image}
              alt="HealthMate, the AI health companion, home page"
              fill
              sizes="(max-width: 860px) 100vw, 58vw"
            />
          </BrowserFrame>
        </figure>
      </div>

      <div className="figures" data-reveal-group>
        <div data-reveal>
          <strong data-count="4" data-suffix="+">4+</strong>
          <span>years of development</span>
        </div>
        <div data-reveal>
          <strong data-count={allProjects.length}>{allProjects.length}</strong>
          <span>projects in the archive</span>
        </div>
        <div data-reveal>
          <strong data-count="5" data-suffix="+">5+</strong>
          <span>freelance clients</span>
        </div>
      </div>
    </section>
  );
}
