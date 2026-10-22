'use client';

import { useEffect, useRef } from 'react';

// A field of lime points that rolls like a slow wave and ripples around the
// pointer. Drawn with Three.js on one canvas behind the hero text; the CSS dot
// grid stays underneath as the fallback when WebGL is not available.

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uPixel;
  varying float vAlpha;
  void main() {
    vec3 p = position;
    float wave = sin(p.x * 0.32 + uTime * 0.7) * 0.55 + cos(p.z * 0.42 + uTime * 0.5) * 0.55;
    float d = distance(p.xz, uMouse);
    wave += exp(-d * 0.32) * 1.5 * sin(d * 1.1 - uTime * 3.0);
    p.y = wave;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uPixel * (16.0 / -mv.z);
    vAlpha = smoothstep(56.0, 10.0, -mv.z) * (0.35 + 0.65 * smoothstep(-1.0, 1.6, wave));
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  varying float vAlpha;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    if (length(c) > 0.5) discard;
    gl_FragColor = vec4(uColor, vAlpha * 0.55);
  }
`;

export default function HeroField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      let THREE;
      try {
        THREE = await import('three');
      } catch {
        return;
      }
      if (disposed) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'low-power' });
      } catch {
        return; // No WebGL: the CSS dot grid stays
      }
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      renderer.setPixelRatio(dpr);

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
      camera.position.set(0, 6, 16);
      camera.lookAt(0, 0, -6);

      const positions = [];
      for (let x = -40; x <= 40; x += 1) {
        for (let z = -34; z <= 10; z += 1) positions.push(x, 0, z);
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const uniforms = {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, -6) },
        uPixel: { value: dpr * 2.2 },
        uColor: { value: new THREE.Vector3(198 / 255, 244 / 255, 50 / 255) }
      };
      const material = new THREE.ShaderMaterial({
        uniforms, vertexShader, fragmentShader,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
      });
      scene.add(new THREE.Points(geometry, material));

      // The pointer, mapped roughly onto the field's floor; eased so the ripple glides
      const target = new THREE.Vector2(0, -6);
      const onMove = (e) => {
        const rect = host.getBoundingClientRect();
        target.set(((e.clientX - rect.left) / rect.width - 0.5) * 36, -26 + ((e.clientY - rect.top) / rect.height) * 30);
      };

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      let frame = 0;
      let visible = true;
      const startedAt = performance.now();
      const tick = () => {
        uniforms.uTime.value = (performance.now() - startedAt) / 1000;
        uniforms.uMouse.value.lerp(target, 0.06);
        renderer.render(scene, camera);
        if (visible) frame = requestAnimationFrame(tick);
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(frame);
        if (visible && !reduceMotion) frame = requestAnimationFrame(tick);
      });
      visibilityObserver.observe(host);
      host.addEventListener('pointermove', onMove);

      resize();
      if (reduceMotion) {
        uniforms.uTime.value = 2;
        renderer.render(scene, camera);
      }
      host.classList.add('has-field');

      cleanup = () => {
        cancelAnimationFrame(frame);
        host.removeEventListener('pointermove', onMove);
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        host.classList.remove('has-field');
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__field" aria-hidden="true" />;
}
