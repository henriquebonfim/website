import { HeadLogo } from '@/shared/ui';
import { Trans } from '@lingui/react/macro';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border mt-12 footer-scene">
      <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HeadLogo size={48} animated chase />
          <p className="font-mono text-xs text-muted-foreground">
            © {year} Henrique Bonfim · <Trans>transmitting from earth</Trans>
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <Trans>built with love · creativity · ai · ☕</Trans>
        </p>
      </div>
    </footer>
  );
};
