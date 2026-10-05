import { useEffect, useMemo, useState } from 'react';

const defaultLines = [
  '> Initializing Burak...\n',
  '> Loading development toolkit...\n',
  '> Connecting creativity + code...\n',
  '> Portfolio systems online.\n',
  '> Ready to build something great.',
];

type TerminalIntroProps = {
  lines?: string[];
  typingSpeedMs?: number;
  lineDelayMs?: number;
  autoHideWhenDone?: boolean;
  onDone?: () => void;
  className?: string;
};

export default function TerminalIntro({ lines = defaultLines, typingSpeedMs = 40, lineDelayMs = 350, autoHideWhenDone = false, onDone, className = '' }: TerminalIntroProps) {
  const text = useMemo(() => lines.join(''), [lines]);
  const [length, setLength] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
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
    timer = window.setTimeout(() => { setHidden(false); step(); }, 0);
    return () => window.clearTimeout(timer);
  }, [text, typingSpeedMs, lineDelayMs, autoHideWhenDone, onDone]);

  return (
    <div className={`hidden lg:block ${hidden ? 'invisible' : ''} ${className}`}>
      <div className="terminal-panel font-mono">
        <div className="flex items-center justify-between border-b border-border px-6 py-4 text-xs text-gunmetal">
          <span>BURAK / SYSTEM CONSOLE</span><span className="text-signal">● ONLINE</span>
        </div>
        <div className="min-h-60 px-6 py-8 text-sm leading-loose whitespace-pre-wrap text-steel" aria-hidden="true">
          {text.slice(0, length)}<span className="text-signal">▎</span>
        </div>
        <p className="sr-only">{text}</p>
        <div className="border-t border-border px-6 py-3 text-xs tracking-wider text-gunmetal">CREATIVITY. PRECISION. PURPOSE.</div>
      </div>
    </div>
  );
}
