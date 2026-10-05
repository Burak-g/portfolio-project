import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['about', 'Om mig'], ['journey', 'Min rejse'], ['techStack', 'Tech stack'],
  ['projects', 'Projekter'], ['contact', 'Kontakt'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-gotham/95 backdrop-blur-md">
      <nav aria-label="Hovednavigation" className="container-wide flex min-h-20 flex-wrap items-center justify-between">
        <a href="#hero" aria-label="Burak Gültekin — til toppen" className="flex items-center gap-3 py-4">
          <span className="border border-signal px-2 py-1 font-heading text-lg text-signal">BG</span>
          <span className="font-mono text-xs tracking-widest text-steel">BURAK GÜLTEKIN</span>
        </a>
        <button type="button" className="p-3 text-signal md:hidden" aria-label={open ? 'Luk menu' : 'Åbn menu'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <ul id="main-menu" className={`${open ? 'flex' : 'hidden'} w-full flex-col gap-1 pb-4 md:flex md:w-auto md:flex-row md:pb-0`}>
          {links.map(([id, label]) => <li key={id}><a className="nav-link" href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>)}
        </ul>
      </nav>
    </header>
  );
}
