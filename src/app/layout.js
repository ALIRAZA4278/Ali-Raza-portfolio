import "./globals.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: "Ali Raza - Web Developer Portfolio",
  description: "A passionate 19-year-old web developer crafting modern, responsive, and user-centric digital experiences with React, Next.js, and the MERN stack.",
  keywords: "Web Developer, React, Next.js, MERN Stack, Frontend Developer, Backend Developer, Full Stack Developer, Ali Raza",
  authors: [{ name: "Ali Raza" }],
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: "Ali Raza - Web Developer Portfolio",
    description: "A passionate 19-year-old web developer crafting modern, responsive, and user-centric digital experiences.",
    url: "https://your-domain.com",
    siteName: "Ali Raza Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Raza - Web Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza - Web Developer Portfolio",
    description: "A passionate 19-year-old web developer crafting modern, responsive, and user-centric digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#3b82f6',
    viewportFit: 'cover'
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
