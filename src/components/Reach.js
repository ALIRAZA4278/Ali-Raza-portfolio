import ClientGlobe from './ClientGlobe';

export default function Reach() {
  return (
    <section id="reach" aria-labelledby="reach-title" className="section section--line wrap">
      <div className="reach__head" data-reveal-group>
        <h2 id="reach-title" className="section-title" data-reveal>
          Live in <span className="accent">6 countries</span>
        </h2>
        <p className="lead" data-reveal>
          Sites I&apos;ve built serve people in Pakistan, Switzerland, the USA, Australia, Poland and
          Albania. Point at or tap a place to turn the globe to it.
        </p>
      </div>
      <ClientGlobe />
    </section>
  );
}
