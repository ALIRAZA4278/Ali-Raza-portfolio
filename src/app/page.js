'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import ThemeChangeNotification from '../components/ThemeChangeNotification';
import MobileLayoutStabilizer from '../components/MobileLayoutStabilizer';

export default function Home() {
  return (
    <MobileLayoutStabilizer>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500 ease-in-out">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <FloatingElements />
        <ThemeChangeNotification />
      </div>
    </MobileLayoutStabilizer>
  );
}