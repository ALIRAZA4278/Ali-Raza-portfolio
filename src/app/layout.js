import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: "Ali Raza - Full Stack Developer Portfolio",
  description: "Full-Stack Developer & AI Integration Specialist with 4+ years of experience. I build high-performance web apps with React, Next.js, MERN stack, and integrate AI solutions using OpenAI & Gemini.",
  keywords: "Web Developer, React, Next.js, MERN Stack, Frontend Developer, Backend Developer, Full Stack Developer, Ali Raza, Portfolio, JavaScript, Node.js, MongoDB",
  authors: [{ name: "Ali Raza" }],
  creator: "Ali Raza",
  publisher: "Ali Raza",
  metadataBase: new URL('https://ali-raza-portfolio-sigma.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ali Raza - Full Stack Developer Portfolio",
    description: "A passionate full-stack web developer crafting modern, responsive, and user-centric digital experiences with React, Next.js, and the MERN stack.",
    url: "https://ali-raza-portfolio-sigma.vercel.app",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "/Images/ali final 3.png",
        width: 1200,
        height: 630,
        alt: "Ali Raza - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza - Full Stack Developer Portfolio",
    description: "A passionate full-stack web developer crafting modern, responsive, and user-centric digital experiences.",
    images: ["/Images/ali final 3.png"],
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
    themeColor: '#3b82f6',
    viewportFit: 'cover'
  };
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali Raza',
    url: 'https://ali-raza-portfolio-sigma.vercel.app',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/ALIRAZA4278',
      'https://www.linkedin.com/in/ali-raza-4a5762282/',
      'https://x.com/AliFaro45370063',
    ],
    knowsAbout: ['React', 'Next.js', 'Node.js', 'MongoDB', 'MERN Stack', 'JavaScript', 'TypeScript'],
  };

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
