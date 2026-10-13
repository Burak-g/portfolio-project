'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { IntentUiButton as Button } from '@/components/ui/IntentUiButton';

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
      onPress={toggleTheme}
      aria-label="Mørkt tema"
      aria-pressed={dark}>
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  );
}
