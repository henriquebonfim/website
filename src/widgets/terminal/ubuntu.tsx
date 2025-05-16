import type { ReactNode } from "react";
import "./ubuntu.css";

export const UbuntuTerminal = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => {
  return (
    <div className="terminal-card">
      <div className="terminal-topnav">
        <div className="terminal-buttons">
          <div className="terminal-close"></div>
          <div className="terminal-minimize"></div>
          <div className="terminal-maximize"></div>
        </div>
        <div className="terminal-titlebar">
          <p className="terminal-title">{title}</p>
        </div>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  );
};
