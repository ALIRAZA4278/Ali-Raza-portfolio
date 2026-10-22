import "./globals.css";
import { Bebas_Neue, Geist } from 'next/font/google';
import WhatsAppButton from '../components/WhatsAppButton';
import Spotlight from '../components/Spotlight';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display'
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-text'
});

const siteTitle = "Ali Raza - Software Engineer & Full-Stack Developer";
const siteDescription = "Software Engineer at MS Capital Soft and full-stack developer in Karachi with 4+ years of experience. I build web apps with React, Next.js and the MERN stack, and integrate AI with OpenAI and Gemini.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: "Software Engineer, Full Stack Developer, Web Developer, React, Next.js, MERN Stack, AI Integration, Ali Raza, Portfolio, Karachi, JavaScript, Node.js, MongoDB",
  authors: [{ name: "Ali Raza" }],
  creator: "Ali Raza",
  publisher: "Ali Raza",
  metadataBase: new URL('https://ali--raza.vercel.app'),
  alternates: {
    canonical: '/',
  },
  // The preview image comes from app/opengraph-image.js
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://ali--raza.vercel.app",
    siteName: "Ali Raza Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@AliFaro45370063",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#0b0b0c',
    viewportFit: 'cover'
  };
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali Raza',
    url: 'https://ali--raza.vercel.app',
    jobTitle: 'Software Engineer',
    worksFor: [
      { '@type': 'Organization', name: 'MS Capital Soft' },
      { '@type': 'Organization', name: 'The Social Hawks' },
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ziauddin University' },
    sameAs: [
      'https://github.com/ALIRAZA4278',
      'https://www.linkedin.com/in/ali-raza-4a5762282/',
      'https://x.com/AliFaro45370063',
    ],
    knowsAbout: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MERN Stack', 'JavaScript', 'TypeScript'],
  };

  return (
    <html lang="en" className={`${bebas.variable} ${geist.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="progress" aria-hidden="true" />
        {children}
        <WhatsAppButton />
        <Spotlight />
      </body>
    </html>
  );
}
