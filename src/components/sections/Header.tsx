'use client';
import { Link } from '@/components/ui/link';

import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const links = [
  ['about', 'Om mig'],
  ['journey', 'Min rejse'],
  ['techStack', 'Tech stack'],
  ['projects', 'Projekter'],
  ['contact', 'Kontakt'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-border bg-navbar text-navbar-fg supports-[backdrop-filter]:bg-navbar/75 sticky top-0 z-40 border-b supports-[backdrop-filter]:backdrop-blur-xl">
      <nav
        aria-label="Hovednavigation"
        className="container-wide flex min-h-20 flex-wrap items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="#hero"
          aria-label="Burak Gültekin — til toppen"
          className="flex items-center gap-3 py-4 md:justify-self-start">
          <span className="border-primary font-display text-primary-subtle-fg border-2 px-2 py-1 text-lg">
            BG
          </span>
        </Link>
        <div className="flex items-center gap-2 md:order-last md:justify-self-end">
          <ThemeToggle />
          <Button
            intent="plain"
            size="sq-md"
            type="button"
            className="text-primary-subtle-fg md:hidden"
            aria-label={open ? 'Luk menu' : 'Åbn menu'}
            aria-expanded={open}
            aria-controls="main-menu"
            onPress={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
        <ul
          id="main-menu"
          className={`${open ? 'motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-1 flex motion-safe:duration-200' : 'hidden'} w-full flex-col gap-1 pb-4 md:flex md:w-auto md:animate-none md:flex-row md:pb-0`}>
          {links.map(([id, label]) => (
            <li key={id}>
              <Link
                className="nav-link font-display"
                href={`#${id}`}
                onPress={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
