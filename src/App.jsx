import { lazy, Suspense } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

/* Lazy-loaded sections for code splitting */
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

/**
 * App — composes all portfolio sections with lazy loading.
 * Sections: Hero → About → Skills → Experience → Certifications → Projects → Contact → Footer
 */
function Loading() {
  return <div className="loading-spinner" />;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Suspense fallback={<Loading />}>
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
