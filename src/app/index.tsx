import { Homepage } from '#/pages/homepage';
import type { FC } from 'react';
import ErrorBoundary from './error';
import './index.css';
import Layout from './layout';
import { Providers } from './providers';

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Providers>
        <Layout>
          <Homepage />
        </Layout>
      </Providers>
    </ErrorBoundary>
  );
};
