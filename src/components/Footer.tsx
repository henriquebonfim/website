import { HeadLogo } from './HeadLogo';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HeadLogo size={48} animated={false} chase />
          <p className="font-mono text-xs text-muted-foreground">
            © {year} Henrique Bonfim · transmitting from earth
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          built with love · creativity · ai · ☕
        </p>
      </div>
    </footer>
  );
};
