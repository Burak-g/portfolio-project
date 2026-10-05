// src/App.tsx
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Journey from './components/sections/Journey';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { PageSection } from './components/ui/PageSection';
import { useQuery } from '@tanstack/react-query';

export default function App() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  return (
    <div className="min-h-dvh">
      {/* Ensure the OUTER element in Header.tsx has: className="h-32 sticky top-0 ..." */}
      <Header />

      <main className="flex snap-y snap-proximity flex-col">
        <PageSection id="hero" variant="screen">
          <Hero />
        </PageSection>

        <PageSection id="about" variant="screen">
          <About />
        </PageSection>

        <PageSection id="journey" variant="screen">
          <Journey />
        </PageSection>

        <PageSection id="techStack" variant="screen">
          <TechStack />
        </PageSection>

        <PageSection id="projects" variant="screen">
          <Projects />
        </PageSection>

        {/* Contact often works better as content-height */}
        <PageSection id="contact" variant="content">
          <Contact />
        </PageSection>

        {/* Contact often works better as content-height */}
        <PageSection id="pokemon" variant="content">

        </PageSection>

      </main>
    </div>
  );
}

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return await response.json()
}
