'use client';

import { useEffect, useRef, useState } from 'react';

// Places where sites I built are live. `projects` are the names shown in the list.
const places = [
  { id: 'karachi', name: 'Karachi, Pakistan', note: 'Home base', projects: 'MS Capital Soft, Secret Hour, Mohit Computers', location: [24.86, 67.01], home: true },
  { id: 'swiss', name: 'Rhine Valley, Switzerland', projects: 'Connectiva', location: [47.43, 9.64] },
  { id: 'atlanta', name: 'Atlanta, USA', projects: 'GracePoint Medical Staffing, Quality Care Senior Living', location: [33.75, -84.39] },
  { id: 'melbourne', name: 'Melbourne, Australia', projects: 'NDIS Beauty Collective', location: [-37.81, 144.96] },
  { id: 'poland', name: 'Poland', projects: 'Cray Stuff', location: [52.0, 19.1] },
  { id: 'albania', name: 'Albania', projects: 'Krijo Productions', location: [41.33, 19.82] }
];

const LIME = [198 / 255, 244 / 255, 50 / 255];
const home = places.find((p) => p.home);

// The globe angles that bring a [lat, lon] to the front
const anglesFor = ([lat, lon]) => [Math.PI - ((lon * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];

export default function ClientGlobe() {
  const canvasRef = useRef(null);
  const focusRef = useRef(null); // angles to turn to, or null to keep spinning
  const [active, setActive] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let globe;
    let frame = 0;
    let visible = true;
    let disposed = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio, 2);

    let [phi, theta] = anglesFor(home.location);
    theta = 0.25;
    let dragX = null;
    let dragPhi = 0;
    let velocity = 0;

    const size = () => {
      const w = host.getBoundingClientRect().width;
      return Math.round(w * dpr);
    };

    const onDown = (e) => {
      dragX = e.clientX;
      dragPhi = phi;
      velocity = 0;
      focusRef.current = null;
      canvas.setPointerCapture?.(e.pointerId);
      canvas.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (dragX === null) return;
      const next = dragPhi + (e.clientX - dragX) / 180;
      velocity = next - phi;
      phi = next;
    };
    const onUp = () => {
      dragX = null;
      canvas.style.cursor = 'grab';
    };

    let disposeAll = () => {};

    (async () => {
      let createGlobe;
      try {
        ({ default: createGlobe } = await import('cobe'));
      } catch {
        return;
      }
      if (disposed) return;
      const px = size();
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: px,
        height: px,
        phi,
        theta,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 5,
        mapBaseBrightness: 0.02,
        baseColor: [0.2, 0.2, 0.22],
        markerColor: LIME,
        glowColor: [0.16, 0.2, 0.06],
        markers: places.map((p) => ({ location: p.location, size: p.home ? 0.09 : 0.06 })),
        arcs: places.filter((p) => !p.home).map((p) => ({ from: home.location, to: p.location })),
        arcColor: LIME,
        arcWidth: 0.6,
        arcHeight: 0.25,
        markerElevation: 0.02,
        opacity: 0.9
      });

      const tick = () => {
        const target = focusRef.current;
        if (target) {
          // turn smoothly toward the chosen place, the short way round
          let d = target[0] - phi;
          d = Math.atan2(Math.sin(d), Math.cos(d));
          phi += d * 0.08;
          theta += (target[1] * 0.6 - theta) * 0.08;
        } else if (dragX === null) {
          phi += velocity + (reduceMotion ? 0 : 0.0035);
          velocity *= 0.92;
          theta += (0.25 - theta) * 0.04;
        }
        const px2 = size();
        globe.update({ phi, theta, width: px2, height: px2 });
        if (visible && !reduceMotion) frame = requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(frame);
        if (visible && !reduceMotion) frame = requestAnimationFrame(tick);
      });
      io.observe(host);
      if (reduceMotion) tick();

      canvas.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      canvas.style.cursor = 'grab';
      requestAnimationFrame(() => { canvas.style.opacity = '1'; });

      disposeAll = () => {
        cancelAnimationFrame(frame);
        io.disconnect();
        canvas.removeEventListener('pointerdown', onDown);
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
        globe.destroy();
      };
    })();

    return () => {
      disposed = true;
      disposeAll();
    };
  }, []);

  const focus = (place) => {
    setActive(place.id);
    focusRef.current = anglesFor(place.location);
  };
  const release = () => {
    setActive(null);
    focusRef.current = null;
  };

  return (
    <div className="globe" data-reveal-group>
      <div className="globe__stage" data-reveal>
        <canvas ref={canvasRef} className="globe__canvas" aria-hidden="true" />
      </div>

      <ul className="globe__list" aria-label="Where my work is live" onMouseLeave={release}>
        {places.map((place) => (
          <li key={place.id} data-reveal>
            <button
              type="button"
              className={`globe__place${active === place.id ? ' is-active' : ''}${place.home ? ' is-home' : ''}`}
              onMouseEnter={() => focus(place)}
              onFocus={() => focus(place)}
              onBlur={release}
              onClick={() => focus(place)}
            >
              <span className="globe__dot" aria-hidden="true" />
              <span className="globe__name">
                {place.name}
                {place.note && <span className="globe__note">{place.note}</span>}
              </span>
              <span className="globe__projects">{place.projects}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
