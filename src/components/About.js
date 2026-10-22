import Image from 'next/image';
import { currentRole, agencyRole, education } from '../data/site';

const facts = [
  { label: 'Based in', value: 'Karachi' },
  { label: 'Age', value: '20' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Working at', value: currentRole.company },
  { label: 'Freelance', value: '5+ clients' },
  { label: 'Learning', value: 'Agentic AI', highlight: true }
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section section--line wrap">
      <div className="about__top">
        <figure className="about__photo" data-reveal-group>
          <div className="about__frame" data-reveal>
            <Image
              src="/Images/ali-raza-headshot.webp"
              alt="Ali Raza in a dark blazer and white shirt"
              fill
              sizes="(max-width: 860px) 80vw, 30vw"
            />
            <span className="about__caption">
              <span className="hero__badge-dot" aria-hidden="true" />
              Ali Raza · Software Engineer
            </span>
          </div>
        </figure>

        <div className="about__intro" data-reveal-group>
          <h2 id="about-title" className="section-title" data-reveal>
            About <span className="accent">me</span>
          </h2>
          <p className="about__statement" data-scrub-words>
            I&apos;m Ali Raza, a full-stack developer from Karachi turning ideas into real, working
            products.
          </p>
        </div>
      </div>

      <dl className="facts" data-reveal-group>
        {facts.map(({ label, value, highlight }) => (
          <div key={label} data-reveal data-spotlight>
            <dt>{label}</dt>
            <dd>{highlight ? <strong>{value}</strong> : value}</dd>
          </div>
        ))}
      </dl>

      <div className="story" data-reveal-group>
        <div data-reveal data-spotlight>
          <h3>How it started</h3>
          <p>
            What started as curiosity about how websites work has grown into a career building
            solutions for real businesses.
          </p>
          <ul className="story__tags" aria-label="Training">
            <li>Saylani Web Development</li>
            <li>Saylani AI Chatbots</li>
            <li>BSCS, Ziauddin</li>
          </ul>
        </div>
        <div data-reveal data-spotlight>
          <h3>Where I work</h3>
          <p>
            I&apos;m a Software Engineer at <strong>MS Capital Soft</strong>{' '}on Adspoke,
            ActiveCalculator and Selvo, and a Full Stack Developer at{' '}
            <strong>The Social Hawks</strong>, building client projects from Figma to deployment.
            Since 2022 I&apos;ve also freelanced for 5+ clients in the USA and Australia.
          </p>
          <ul className="story__tags" aria-label="Companies">
            <li>{currentRole.company}</li>
            <li>{agencyRole.company}</li>
            <li>Freelance since 2022</li>
          </ul>
        </div>
        <div data-reveal data-spotlight>
          <h3>What I add</h3>
          <p>
            I don&apos;t only build frontends or backends: I integrate{' '}
            <strong>AI into real products</strong>. From OpenAI-powered chatbots to a Gemini health
            report analyser, I like combining web development with AI to make things that are
            genuinely useful.
          </p>
          <ul className="story__tags" aria-label="AI tools">
            <li>OpenAI</li>
            <li>Gemini</li>
            <li>Dialogflow</li>
          </ul>
        </div>
      </div>

      <div className="edu" data-reveal-group>
        <h3 data-reveal>Education and certifications</h3>
        <ul>
          {education.map(({ name, where }) => (
            <li key={name} data-reveal>
              {name}
              <span>{where}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
