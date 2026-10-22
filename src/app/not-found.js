import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Page not found - Ali Raza',
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="notfound wrap">
        <p className="notfound__code display" aria-hidden="true">404</p>
        <h1 className="section-title">
          Page not <span className="accent">found</span>
        </h1>
        <p className="lead notfound__text">
          This page doesn&apos;t exist or has moved. The work and the contact details are one click
          away.
        </p>
        <div className="notfound__actions">
          <Link href="/" className="btn btn--arrow">Back to home</Link>
          <Link href="/projects" className="btn btn--ghost">See all projects</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
