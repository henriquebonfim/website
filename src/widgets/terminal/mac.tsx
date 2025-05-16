import React from "react";
import "./mac.css";

function colorizeJSON(json: string | object): string {
  if (typeof json !== "string") {
    json = JSON.stringify(json, null, 2); // Pretty-print with 2-space indentation
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

export function MacTerminal({
  cmd,
  json,
  children,
  showCursor = false,
}: {
  cmd?: string;
  json?: string | object;
  children?: React.ReactNode;
  showCursor?: boolean;
}) {
  return (
    <div className="terminal-page-bg">
      <div className="terminal-window">
        <div className="terminal-bar terminal-bar-bg flex items-center gap-2 rounded-t-lg border-b border-gray-700 px-4 py-2">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <pre className="terminal-bar-user ml-3 font-mono text-xs">
            henriquebonfim@website:~
          </pre>
        </div>
        <div className="terminal-content p-4">
          <pre className="terminal-prompt font-mono text-xs text-wrap">
            {`henriquebonfim@website:~$ `}
            <span className="terminal-cmd">{cmd}</span>
            {showCursor && <span className="terminal-cursor" />}
          </pre>
          <div className="terminal-output grid grid-cols-2 content-center items-center font-mono text-xs">
            {typeof json === "string" && json.trim().startsWith("{") ? (
              <pre
                className=""
                dangerouslySetInnerHTML={{
                  __html: colorizeJSON(json),
                }}
              />
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
