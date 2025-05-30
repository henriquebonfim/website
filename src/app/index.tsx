import { Homepage } from '#/pages/home';
import { Suspense, type FC } from 'react';
import './index.css';
import { Layout } from './layout';
import { Providers } from './providers';
import { ErrorBoundary, Loading } from '#/shared/ui';

export const App: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Providers>
          <Layout>
            <Homepage />
          </Layout>
        </Providers>
      </ErrorBoundary>
    </Suspense>
  );
};
