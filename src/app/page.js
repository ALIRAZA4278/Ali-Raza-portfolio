'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import MobileLayoutStabilizer from '../components/MobileLayoutStabilizer';

export default function Home() {
  return (
    <MobileLayoutStabilizer>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingElements />
      </div>
    </MobileLayoutStabilizer>
  );
}
