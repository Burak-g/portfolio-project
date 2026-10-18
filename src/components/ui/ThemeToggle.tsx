'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next ? '#020617' : '#ffffff');
    setDark(next);
    try {
      localStorage.setItem('portfolio-theme', next ? 'dark' : 'light');
    } catch {
      // Switching still works when browser storage is unavailable.
    }
  }

  return (
    <Button
      intent="outline"
      size="sq-md"
      className="border-2"
      onPress={toggleTheme}
      aria-label="Mørkt tema"
      aria-pressed={dark}>
      {dark ? (
        <Sun
          key="sun"
          aria-hidden="true"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-75 motion-safe:duration-200"
        />
      ) : (
        <Moon
          key="moon"
          aria-hidden="true"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-75 motion-safe:duration-200"
        />
      )}
    </Button>
  );
}
