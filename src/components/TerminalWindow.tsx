import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const TerminalWindow = ({
  title = 'zsh',
  children,
  className,
  bodyClassName,
}: TerminalWindowProps) => {
  return (
    <div className={cn('terminal-window overflow-hidden', className)}>
      <div className="terminal-bar">
        <span className="traffic-dot bg-term-red" aria-hidden />
        <span className="traffic-dot bg-term-yellow" aria-hidden />
        <span className="traffic-dot bg-term-green" aria-hidden />
        <span className="ml-3 font-mono text-xs text-muted-foreground tracking-wide">{title}</span>
      </div>
      <div className={cn('p-5 font-mono text-sm', bodyClassName)}>{children}</div>
    </div>
  );
};
