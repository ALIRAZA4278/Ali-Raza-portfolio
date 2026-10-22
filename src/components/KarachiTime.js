'use client';

import { useSyncExternalStore } from 'react';

const format = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date());

// The clock is an external source: re-read it every 30 seconds.
// The server has no visitor clock, so it renders the fallback text.
const subscribe = (onChange) => {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
};
const getServerSnapshot = () => null;

// The current time in Karachi, so a visitor knows when a reply is likely.
// `compact` renders just "4:12 PM in Karachi" for small labels.
export default function KarachiTime({ compact = false }) {
  const time = useSyncExternalStore(subscribe, format, getServerSnapshot);

  if (compact) {
    return time ? <><time>{time}</time> in Karachi</> : <>Karachi, PKT</>;
  }
  if (!time) return <>I&apos;m based in Karachi (PKT, UTC+5).</>;
  return <>It&apos;s <time>{time}</time> in Karachi right now (PKT, UTC+5).</>;
}
