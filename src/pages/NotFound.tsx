import { HeadLogo } from '@/shared/ui/HeadLogo';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    const existingRobots = document.querySelector('meta[name="robots"]');
    const previousRobotsContent = existingRobots?.getAttribute('content');
    const robotsMeta = existingRobots ?? document.createElement('meta');
    const createdRobotsMeta = !existingRobots;

    document.title = '404 | Henrique Bonfim';

    if (createdRobotsMeta) {
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute('content', 'noindex, nofollow');

    console.error('404 Error: User attempted to access non-existent route:', location.pathname);

    return () => {
      document.title = previousTitle;

      if (previousRobotsContent) {
        robotsMeta.setAttribute('content', previousRobotsContent);
      } else if (createdRobotsMeta) {
        robotsMeta.remove();
      }
    };
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background grid-bg">
      <div className="text-center max-w-md px-6">
        <div className="mx-auto mb-6 animate-float">
          <HeadLogo size={120} />
        </div>
        <h1 className="font-display text-6xl font-bold mb-2 text-gradient">404</h1>
        <p className="font-mono text-sm text-muted-foreground mb-6">
          $ cd {location.pathname} → no such file or directory
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors"
        >
          ./return-home.sh
        </a>
      </div>
    </main>
  );
};

export default NotFound;
