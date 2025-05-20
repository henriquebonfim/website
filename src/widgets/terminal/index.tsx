import { TERMINAL_USERNAME } from "#/shared/constants";
import React, { type JSX } from "react";

/**
 * Helper function to colorize JSON for display
 * @param {string | object} json - JSON string or object to colorize
 * @returns {string} HTML string with colorized JSON
 * @private
 */
function colorizeJSON(json: string | object): string {
  if (typeof json !== "string") {
    json = JSON.stringify(json, null, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\b(true|false|null)\b|\b-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)/g,
    (match) => {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return `<span class="terminal-json-${cls}">${match}</span>`;
    },
  );
}

/**
 * Props for the PrettyJSON component
 * @interface PrettyJSONProps
 * @property {string | object} json - JSON data to display
 */
interface PrettyJSONProps {
  json: string | object;
}

/**
 * Component to display formatted and syntax-highlighted JSON
 *
 * @component
 * @param {PrettyJSONProps} props - Component properties
 * @returns {React.ReactElement | null} Rendered JSON or null if invalid JSON
 */
export const PrettyJSON: React.FC<PrettyJSONProps> = ({
  json,
}: PrettyJSONProps): React.ReactElement | null => {
  if (
    typeof json === "string" &&
    !json.trim().startsWith("{") &&
    !json.trim().startsWith("[")
  )
    return null;

  return (
    <pre
      className="text-xs"
      dangerouslySetInnerHTML={{
        __html: colorizeJSON(json),
      }}
    />
  );
};

/**
 * Props for the Terminal component
 * @interface TerminalProps
 * @property {string} [title] - Optional title to display in the terminal header
 * @property {string} [cmd] - Optional command to display in the terminal prompt
 * @property {React.ReactNode} [children] - Optional content to display in the terminal body
 */
interface TerminalProps {
  title?: string;
  cmd?: string;
  children?: React.ReactNode;
}

/**
 * Terminal component that simulates a command-line interface
 *
 * @component
 * @param {TerminalProps} props - Component properties
 * @param {string} [props.title] - Title displayed in the terminal header
 * @param {string} [props.cmd] - Command displayed in the terminal prompt
 * @param {React.ReactNode} [props.children] - Content displayed in the terminal body
 *
 * @returns {JSX.Element} Rendered Terminal component
 *
 * @example
 * // Basic usage with command
 * <Terminal cmd="npm install">
 *   <p>Installing packages...</p>
 * </Terminal>
 *
 * @example
 * // With title and command
 * <Terminal title="Project Setup" cmd="git init">
 *   <p>Initialized empty Git repository</p>
 * </Terminal>
 *
 * @example
 * // With JSON output
 * <Terminal cmd="cat package.json">
 *   <PrettyJSON json={{ name: "my-app", version: "1.0.0" }} />
 * </Terminal>
 */
export function Terminal({ title, cmd, children }: TerminalProps): JSX.Element {
  return (
    <div className="bg-neutral/90 w-full rounded-xl shadow-xl/30">
      {/* Terminal header with control buttons */}
      <div className="bg-neutral border-base-100/30 flex h-12 items-center rounded-t-xl border-b px-4 py-2">
        <div className="absolute left-4 flex items-center gap-1">
          {/* Terminal control buttons */}
          <div className="bg-error h-3 w-3 rounded-full" />
          <div className="bg-warning h-3 w-3 rounded-full" />
          <div className="bg-success h-3 w-3 rounded-full" />

          {/* Terminal title if provided */}
          {title && (
            <pre className="text-base-content ml-3 font-mono text-xs">
              {TERMINAL_USERNAME} <b>{title}</b>
            </pre>
          )}
        </div>
      </div>

      {/* Terminal command line if provided */}
      {cmd && (
        <div className="space-x-2 px-3 pt-3 font-mono text-xs font-bold text-wrap">
          <span className="text-accent">{`${TERMINAL_USERNAME}$`}</span>
          <span className="text-content">{cmd}</span>
          <span className="animate-blink-cursor bg-base-content inline-block h-[1em] w-[0.6em] align-middle" />
        </div>
      )}

      {/* Terminal content */}
      <div className="p-3">{children}</div>
    </div>
  );
}
