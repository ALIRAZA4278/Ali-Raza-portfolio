import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          borderRadius: '8px',
        }}
      >
        <span
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '-0.5px',
          }}
        >
          AR
        </span>
      </div>
    ),
    { ...size }
  );
}
