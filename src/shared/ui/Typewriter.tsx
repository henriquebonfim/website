import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
}

export const Typewriter = ({ lines, speed = 28, startDelay = 0, onDone }: TypewriterProps) => {
  const reduce = useReducedMotion();
  const linesKey = lines.join('\n');
  const [text, setText] = useState(() => (reduce ? linesKey : ''));
  const [done, setDone] = useState(() => Boolean(reduce));

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;

    const run = async () => {
      if (reduce) {
        setText(linesKey);
        setDone(true);
        onDone?.();
        return;
      }

      setText('');
      setDone(false);

      await new Promise((r) => (timer = window.setTimeout(r, startDelay)));
      let acc = '';
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let c = 0; c < line.length; c++) {
          if (cancelled) return;
          acc += line[c];
          setText(acc);
          await new Promise((r) => (timer = window.setTimeout(r, speed)));
        }
        acc += '\n';
        setText(acc);
        await new Promise((r) => (timer = window.setTimeout(r, 180)));
      }
      setDone(true);
      onDone?.();
    };
    void run();
    return () => {
      cancelled = true;
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [lines, linesKey, onDone, reduce, speed, startDelay]);

  return (
    <div className="whitespace-pre-wrap break-words text-foreground/90 font-mono">
      {text.split('\n').map((line, idx) => {
        // Preserve leading whitespace and check for a leading '$'
        const leading = line.match(/^\s*/)?.[0] ?? '';
        const trimmed = line.slice(leading.length);
        const startsWithDollar = trimmed.startsWith('$');

        if (startsWithDollar) {
          return (
            <div key={idx}>
              {leading}
              <span className="text-primary">{trimmed}</span>
            </div>
          );
        }

        return <div key={idx}>{line}</div>;
      })}

      <span className="inline-block ml-0.5 h-4 w-2 align-[-2px] bg-primary-glow animate-blink" />
    </div>
  );
};
