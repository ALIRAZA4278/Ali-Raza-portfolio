import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechStrip from '../components/TechStrip';
import Statement from '../components/Statement';
import Projects from '../components/Projects';
import About from '../components/About';
import Proof from '../components/Proof';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Reach from '../components/Reach';
import Skills from '../components/Skills';
import MoreWork from '../components/MoreWork';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MotionLayer from '../components/MotionLayer';
import HashScroll from '../components/HashScroll';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <Statement />
        <Projects />
        <About />
        <Proof />
        <Services />
        <Experience />
        <Reach />
        <Skills />
        <MoreWork />
        <Contact />
      </main>
      <Footer />
      <MotionLayer />
      <HashScroll />
    </>
  );
}
