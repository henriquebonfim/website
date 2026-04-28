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
  const [li, setLi] = useState(0);
  const [text, setText] = useState(() => (reduce ? linesKey : ''));
  const [done, setDone] = useState(() => Boolean(reduce));

  useEffect(() => {
    let cancelled = false;
    let timer: number | undefined;

    const run = async () => {
      if (reduce) {
        setLi(lines.length);
        setText(linesKey);
        setDone(true);
        onDone?.();
        return;
      }

      setLi(0);
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
        setLi(i + 1);
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
    <pre className="whitespace-pre-wrap break-words text-foreground/90">
      {text}
      <span
        className={`inline-block ml-0.5 h-4 w-2 align-[-2px] bg-primary-glow ${done ? 'animate-blink' : 'animate-blink'}`}
      />
    </pre>
  );
};
