import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ReadingExperience from './ReadingExperience';
import Footer from './Footer';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <ReadingExperience />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

