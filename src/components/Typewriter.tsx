import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TypewriterProps {
  lines: string[];
  speed?: number;
  startDelay?: number;
  onDone?: () => void;
}

export const Typewriter = ({ lines, speed = 28, startDelay = 0, onDone }: TypewriterProps) => {
  const reduce = useReducedMotion();
  const [li, setLi] = useState(0);
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(lines.join('\n'));
      setDone(true);
      onDone?.();
      return;
    }
    let cancelled = false;
    let timer: number;

    const run = async () => {
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
    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <pre className="whitespace-pre-wrap break-words text-foreground/90">
      {text}
      <span
        className={`inline-block ml-0.5 h-4 w-2 align-[-2px] bg-primary-glow ${done ? 'animate-blink' : 'animate-blink'}`}
      />
    </pre>
  );
};
