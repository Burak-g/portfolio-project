import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * Fake terminal intro that types out lines, then optionally calls onDone().
 * - Hides on small screens (≤767px) by default (matches your original CSS).
 * - Uses Tailwind for styling + a tiny bit of inline style for blink keyframes.
 */
type TerminalIntroProps = {
  lines?: string[];
  typingSpeedMs?: number; // per character
  lineDelayMs?: number; // delay between lines
  autoHideWhenDone?: boolean; // fade out when finished
  onDone?: () => void; // callback when typing completes
  className?: string; // extra wrapper classes
};

export default function TerminalIntro({
  lines = [
    '> Initializing Burak...\n',
    '> Loading good vibes ☕\n',
    '> Humor module booting up...\n',
    '> Connecting to portfolio...\n',
    '> Success: Ready to build cool stuff 💻',
  ],
  typingSpeedMs = 40,
  lineDelayMs = 350,
  autoHideWhenDone = false,
  onDone,
  className = '',
}: TerminalIntroProps) {
  const [output, setOutput] = useState('');
  const [hidden, setHidden] = useState(false);
  const text = useMemo(() => lines.join(''), [lines]);
  const iRef = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const step = () => {
      if (iRef.current < text.length) {
        setOutput((prev) => prev + text.charAt(iRef.current));
        iRef.current += 1;
        const delay = prefersReduced ? 0 : typingSpeedMs;
        raf.current = window.setTimeout(step, delay);
      } else {
        // done
        if (autoHideWhenDone) {
          // small delay so the user sees the last char
          setTimeout(() => setHidden(true), 500);
        }
        onDone?.();
      }
    };

    // start typing - slight line delay between chunks
    const start = () => {
      if (!prefersReduced && lineDelayMs > 0) {
        // simulate little pauses where there are line breaks
        const run = () => {
          step();
          // we already handle speed inside step; this keeps API simple
        };
        run();
      } else {
        step();
      }
    };

    start();
    return () => {
      if (raf.current) window.clearTimeout(raf.current);
    };
  }, [text, typingSpeedMs, lineDelayMs, autoHideWhenDone, onDone]);

  return (
    <div
      className={[
        // hide on small screens like your original CSS
        'hidden lg:block',
        hidden ? 'invisible opacity-0 transition-all duration-500' : 'visible opacity-100',
        className,
      ].join(' ')}>
      {/* Fake terminal card */}
      <div className="border-border bg-gray-gotham text-steel max-w-xl rounded-sm font-mono shadow-[0_0_24px_teal] dark:shadow-[0_0_24px_teal]">
        <div className="text-gunmetal px-4 py-2 font-mono text-sm">burak@portfolio:~$</div>
        <div
          className="code px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap"
          aria-live="polite">
          <span>{output}</span>
          <span className="ml-0.5 inline-block animate-[blink_1s_steps(1,start)_infinite]">|</span>
        </div>
      </div>

      {/* cursor blink keyframes (scoped) */}
      <style>{`@keyframes blink { 50% { opacity: 0 } }`}</style>
    </div>
  );
}
