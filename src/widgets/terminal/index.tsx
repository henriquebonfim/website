import { TERMINAL_USERNAME } from '#/shared/constants';
import { sanitizeHTML } from '#/shared/utils/sanitizeHTML';
import React, { type FC } from 'react';

// Colorizes JSON for pretty terminal display
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
}

export const PrettyJSON: FC<PrettyJSONProps> = ({ json }) => {
  if (
    typeof json === 'string' &&
    !json.trim().startsWith('{') &&
    !json.trim().startsWith('[')
  )
    return null;
  return (
    <pre
      className="text-xs"
      dangerouslySetInnerHTML={{ __html: sanitizeHTML(colorizeJSON(json)) }}
    />
  );
};

interface TerminalProps {
  title?: string;
  cmd?: string;
  children?: React.ReactNode;
}

export function Terminal({
  title,
  cmd,
  children,
}: TerminalProps): React.ReactElement {
  return (
    <div className="bg-neutral/90 w-full rounded-xl shadow-xl/30">
      <div className="bg-neutral border-base-100/30 flex h-12 items-center rounded-t-xl border-b px-4 py-2">
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
      </div>
      {cmd && (
        <div className="space-x-2 px-3 pt-3 font-mono text-xs font-bold text-wrap">
          <span className="text-accent">{`${TERMINAL_USERNAME}$`}</span>
          <span className="text-content">{cmd}</span>
          <span className="animate-blink-cursor bg-base-content inline-block h-[1em] w-[0.6em] align-middle" />
        </div>
      )}
      <div className="p-3">{children}</div>
    </div>
  );
}
