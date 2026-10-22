// One sentence about the work, held on screen while its words light up.
// The tall section gives the scroll distance; the inner block stays pinned.
export default function Statement() {
  return (
    <section className="statement" aria-labelledby="statement-label" data-statement>
      <div className="statement__pin wrap">
        <p id="statement-label" className="statement__label">What I do</p>
        <p className="statement__text display" data-statement-text>
          I build websites and web apps for businesses, from the first Figma file to a fast,{' '}
          <span className="accent">live site</span>, and add AI where it helps.
        </p>
      </div>
    </section>
  );
}
