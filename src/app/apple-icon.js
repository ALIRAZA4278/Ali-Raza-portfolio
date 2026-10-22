import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Home-screen icon for phones (iOS uses this when the site is saved)
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0b0c',
          color: '#c6f432',
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        AR
      </div>
    ),
    { ...size }
  );
}
