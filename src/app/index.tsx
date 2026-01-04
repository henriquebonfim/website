import { lazy, type FC } from 'react';
import './index.css';
import { Layout } from './layout';
import { RootProvider } from './providers/Root';

const Homepage = lazy(() =>
  import('#/pages/home').then((mod) => ({ default: mod.Homepage })),
);
export const App: FC = () => {
  return (
    <RootProvider>
      <Layout>
        <Homepage />
      </Layout>
    </RootProvider>
  );
};
