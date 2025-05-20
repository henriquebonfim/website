import "./index.css";
import { Homepage } from "#/pages/homepage";
import { Providers } from "./providers";
import Layout from "./layout";
import ErrorBoundary from "./error";

export function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <Layout>
          <Homepage />
        </Layout>
      </Providers>
    </ErrorBoundary>
  );
}
