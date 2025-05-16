import "./index.css";
import { Homepage } from "#/pages/homepage";
import { Providers } from "./providers";
import Layout from "./layout";

export function App() {
  return (
    <Providers>
      <Layout>
        <Homepage />
      </Layout>
    </Providers>
  );
}
