import { Link } from '@/components/ui/link';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { PageSection } from './components/ui/PageSection';

export default function App() {
  return (
    <div className="min-h-dvh">
      <Link
        href="#main-content"
        className="focus:bg-primary focus:text-primary-fg sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:p-3">
        Spring til indhold
      </Link>
      <Header />
      <main id="main-content">
        <PageSection id="hero">
          <Hero />
        </PageSection>
        <PageSection id="about">
          <About />
        </PageSection>
        <PageSection id="journey">
          <Journey />
        </PageSection>
        <PageSection id="techStack">
          <TechStack />
        </PageSection>
        <PageSection id="projects">
          <Projects />
        </PageSection>
        <PageSection id="contact">
          <Contact />
        </PageSection>
      </main>
      <footer className="container-wide text-muted-fg flex flex-wrap justify-between gap-4 py-8 font-mono text-xs">
        <span>© {new Date().getFullYear()} Burak Gültekin</span>
        <Link href="#hero" className="hover:text-primary">
          Tilbage til toppen ↑
        </Link>
      </footer>
    </div>
  );
}
