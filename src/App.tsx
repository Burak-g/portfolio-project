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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-signal focus:p-3 focus:text-gotham">Spring til indhold</a>
      <Header />
      <main id="main-content">
        <PageSection id="hero"><Hero /></PageSection>
        <PageSection id="about"><About /></PageSection>
        <PageSection id="journey"><Journey /></PageSection>
        <PageSection id="techStack"><TechStack /></PageSection>
        <PageSection id="projects"><Projects /></PageSection>
        <PageSection id="contact"><Contact /></PageSection>
      </main>
      <footer className="container-wide flex flex-wrap justify-between gap-4 py-8 font-mono text-xs text-gunmetal">
        <span>© {new Date().getFullYear()} Burak Gültekin</span>
        <a href="#hero" className="hover:text-signal">Tilbage til toppen ↑</a>
      </footer>
    </div>
  );
}
