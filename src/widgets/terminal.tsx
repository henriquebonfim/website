import { TERMINAL_USERNAME } from '#/shared/constants';
import { sanitizeHTML } from '#/shared/utils';
import React, {
  type FC,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

/**
 * Colorizes JSON for pretty terminal display.
 * @param json - JSON object or string
 * @returns HTML string with syntax highlighting
 */
const colorizeJSON = (json: string | object): string => {
  let str = typeof json === 'string' ? json : JSON.stringify(json, null, 2);
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;/');
  return str.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(true|false|null)\b|\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)/g,
    (match) => {
      let cls = 'number';
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? 'key' : 'string';
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return `<span class="terminal-json-${cls}">${match}</span>`;
    },
  );
};

interface PrettyJSONProps {
  json: string | object;
  animate?: boolean; // Optional prop to control animation
}

/**
 * Renders pretty-printed, colorized JSON for terminal display with optional Matrix-like animation.
 * @remarks
 * Animates the JSON output from left to right, looping infinitely if animate is true.
 */
export const PrettyJSON: FC<PrettyJSONProps> = ({ json, animate = false }) => {
  const colorized = useMemo(() => {
    if (
      typeof json === 'string' &&
      !json.trim().startsWith('{') &&
      !json.trim().startsWith('[')
    )
      return '';
    return sanitizeHTML(colorizeJSON(json));
  }, [json]);

  const [visibleChars, setVisibleChars] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Animation effect: reveal one character at a time, then loop
  useEffect(() => {
    if (!colorized || !animate) {
      setVisibleChars(colorized.length);
      return;
    }
    setVisibleChars(0);
    if (timerRef.current) clearTimeout(timerRef.current);
    let idx = 0;
    const animateFn = () => {
      setVisibleChars(idx);
      if (idx < colorized.length) {
        idx++;
        timerRef.current = setTimeout(animateFn, 8);
      } else {
        setTimeout(() => {
          setVisibleChars(0);
          idx = 0;
          setTimeout(animateFn, 800);
        }, 1000);
      }
    };
    animateFn();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [colorized, animate]);

  if (!colorized) return null;
  return (
    <pre
      className="text-base-100 matrix-animate hidden scale-95 text-left text-xs text-wrap md:block"
      aria-live="polite"
      tabIndex={0}
      role="region"
      dangerouslySetInnerHTML={{ __html: colorized.slice(0, visibleChars) }}
    />
  );
};

interface TerminalProps {
  title?: string;
  cmd?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Terminal-like UI component with title bar, command prompt, and content area.
 */
export const Terminal: FC<TerminalProps> = memo(
  ({ title = 'Terminal', cmd, children, className, id }) => (
    <section
      id={id}
      tabIndex={0}
      aria-live="polite"
      className={`bg-neutral/90 w-full rounded-xl shadow-xl/30 ${className}`}
      aria-label={`Terminal: "${title.toLowerCase()}"`}
      role="none"
    >
      <header
        className="bg-neutral border-base-100/30 flex h-12 items-center rounded-t-xl border-b px-4 py-2"
        aria-label="Terminal header"
        role="none"
      >
        <div className="left-4 flex items-center gap-1">
          <div className="bg-error h-3 w-3 rounded-full" />
          <div className="bg-warning h-3 w-3 rounded-full" />
          <div className="bg-success h-3 w-3 rounded-full" />
          {title && (
            <pre className="text-base-content ml-3 font-mono text-xs text-wrap">
              {TERMINAL_USERNAME} <b>{title}</b>
            </pre>
          )}
        </div>
      </header>
      <main aria-label="Terminal content" role="none">
        {cmd && (
          <p
            className="space-x-2 px-3 pt-3 font-mono text-xs font-bold text-wrap"
            aria-label="Command prompt"
          >
            <span className="text-accent">{`${TERMINAL_USERNAME}$`}</span>
            <span className="text-content">{cmd}</span>
            <span className="animate-blink-cursor bg-base-content inline-block h-[1em] w-[0.6em] align-middle" />
          </p>
        )}
        <div className="p-3">{children}</div>
      </main>
    </section>
  ),
);
