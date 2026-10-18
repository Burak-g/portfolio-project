'use client';
import { TextField } from '@/components/ui/text-field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/field';
import { Code } from '@/components/ui/text';

import { Button } from '@/components/ui/Button';
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { projects } from '../../lib/projectData';
import { techCategories } from '../../lib/techStackData';
import { runTerminalCommand, terminalCommandNames } from '../../lib/terminalCommands';

const defaultLines = [
  '> Initializing Burak...\n',
  '> Turning caffeine into components...\n',
  '> Portfolio systems online.\n\n',
  '> Skriv help for at udforske portfolio.\n',
];
const context = {
  projects: projects.map((project) => `${project.title} — ${project.tech.join(', ')}`),
  skills: techCategories.map(
    (category) => `${category.title}: ${category.icons.map((icon) => icon.name).join(', ')}`,
  ),
};

type TerminalIntroProps = {
  lines?: string[];
  typingSpeedMs?: number;
  lineDelayMs?: number;
  autoHideWhenDone?: boolean;
  onDone?: () => void;
  className?: string;
};
type Entry = { command: string; output: string };

function HighlightHelp({ text }: { text: string }) {
  return text.split(/(\bhelp\b)/).map((part, index) =>
    part === 'help' ? (
      <Code
        key={index}
        className="bg-primary text-primary-fg border-0 px-1 text-[length:inherit] font-normal sm:text-[length:inherit]">
        {part}
      </Code>
    ) : (
      part
    ),
  );
}

export default function TerminalIntro({
  lines = defaultLines,
  typingSpeedMs = 25,
  lineDelayMs = 200,
  autoHideWhenDone = false,
  onDone,
  className = '',
}: TerminalIntroProps) {
  const text = useMemo(() => lines.join(''), [lines]);
  const [length, setLength] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const draftRef = useRef('');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIntro) return;
    let index = 0;
    let timer: number;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const step = () => {
      index = reduced ? text.length : index + 1;
      setLength(index);
      if (index < text.length) {
        timer = window.setTimeout(step, text[index - 1] === '\n' ? lineDelayMs : typingSpeedMs);
      } else {
        onDone?.();
        if (autoHideWhenDone) timer = window.setTimeout(() => setHidden(true), 500);
      }
    };
    timer = window.setTimeout(() => {
      setHidden(false);
      step();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [text, typingSpeedMs, lineDelayMs, autoHideWhenDone, onDone, showIntro]);

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [entries, length]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const command = input.trim();
    if (!command) return;
    const result = runTerminalCommand(command, context);
    setShowIntro(false);
    setHistory((previous) => [...previous, command].slice(-100));
    setHistoryIndex(null);
    draftRef.current = '';
    setInput('');
    setEntries((previous) =>
      result.clear ? [] : [...previous, { command, output: result.output }].slice(-100),
    );
    if (result.section) {
      document.getElementById(result.section)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if ((event.key === 'ArrowUp' || event.key === 'ArrowDown') && history.length) {
      event.preventDefault();
      if (event.key === 'ArrowUp') {
        if (historyIndex === null) draftRef.current = input;
        const next = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(next);
        setInput(history[next]);
      } else if (historyIndex !== null) {
        const next = historyIndex + 1;
        setHistoryIndex(next < history.length ? next : null);
        setInput(next < history.length ? history[next] : draftRef.current);
      }
    }
    if (event.key === 'Tab' && !event.shiftKey && input.trim()) {
      const matches = terminalCommandNames.filter((command) =>
        command.startsWith(input.trim().toLowerCase()),
      );
      if (matches.length === 1 && matches[0] !== input) {
        event.preventDefault();
        setInput(matches[0]);
      }
    }
  }

  return (
    <div className={`${hidden ? 'invisible' : ''} ${className}`}>
      <div className="terminal-panel font-mono">
        <div className="border-border text-muted-fg flex items-center justify-between border-b px-4 py-4 text-xs sm:px-6">
          <span>BURAK / SYSTEM CONSOLE</span>
          <span className="text-primary-subtle-fg inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-current motion-safe:animate-[pulse_3s_ease-in-out_infinite]"
            />
            ONLINE
          </span>
        </div>
        <div
          ref={outputRef}
          className="text-fg h-72 overflow-y-auto px-4 py-5 text-sm leading-relaxed break-words whitespace-pre-wrap sm:px-6"
          tabIndex={0}
          aria-label="Terminalens historik">
          {showIntro && (
            <>
              <span aria-hidden="true">
                <HighlightHelp text={text.slice(0, length)} />
              </span>
              <span className="sr-only">{text}</span>
            </>
          )}
          {!showIntro && entries.length === 0 && (
            <span className="text-muted-fg">
              <HighlightHelp text="Terminalen er ryddet. Skriv help for at komme i gang." />
            </span>
          )}
          {entries.map((entry, index) => (
            <div key={index} className="mb-4">
              <div className="text-primary-subtle-fg">burak@portfolio:~$ {entry.command}</div>
              <div>{entry.output}</div>
            </div>
          ))}
        </div>
        <div className="sr-only" role="status" aria-live="polite">
          {entries.at(-1)?.output ?? ''}
        </div>
        <form
          onSubmit={submit}
          className="border-border flex items-center gap-2 border-t px-4 py-3 sm:px-6">
          <Label htmlFor="portfolio-command" className="text-primary-subtle-fg shrink-0 text-sm">
            <span aria-hidden="true">~$</span>
            <span className="sr-only">Terminalkommando</span>
          </Label>
          <TextField
            aria-label="Terminalkommando"
            className="min-w-0 flex-1"
            value={input}
            onChange={(value) => {
              setInput(value);
              setHistoryIndex(null);
            }}>
            <Input
              id="portfolio-command"
              type="text"
              onKeyDown={handleKeyDown}
              maxLength={200}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="Skriv help…"
              aria-describedby="terminal-help"
              className="text-fg placeholder:text-muted-fg focus-visible:outline-ring min-w-0 flex-1 rounded-sm border-0 bg-transparent px-1 py-1 font-mono text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </TextField>
          <Button
            intent="outline"
            size="sm"
            type="submit"
            className="min-w-11 shrink-0"
            aria-label="Kør kommando">
            <span aria-hidden="true" className="text-xl leading-none">
              ↵
            </span>
          </Button>
        </form>
        <div
          id="terminal-help"
          className="border-border text-muted-fg border-t px-4 py-3 text-xs sm:px-6">
          <HighlightHelp text="help · ↑ / ↓ historik · Tab fuldfør · Enter kør" />
        </div>
      </div>
    </div>
  );
}
