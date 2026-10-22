import { ImageResponse } from 'next/og';

export const alt = 'Ali Raza, Software Engineer and full-stack developer in Karachi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// The link preview shown when the site is shared (WhatsApp, LinkedIn, X)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0b0b0c',
          color: '#f3f3f1',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 28, color: '#8f8e89' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#c6f432' }} />
          Available for freelance and full-time roles
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 168, fontWeight: 800, letterSpacing: -6, lineHeight: 0.95 }}>ALI RAZA</div>
          <div style={{ marginTop: 24, fontSize: 44, color: '#c6f432' }}>Software Engineer · Full-stack and AI</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#8f8e89' }}>
          <span>React · Next.js · MERN · OpenAI · Gemini</span>
          <span>Karachi, Pakistan</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
