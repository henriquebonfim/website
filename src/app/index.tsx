import "./index.css";
import { Homepage } from "#/pages/homepage";
import { Providers } from "./providers";
import Layout from "./layout";

const App = () => {
  return (
    <Providers>
      <Layout>
        <Homepage />
      </Layout>
    </Providers>
  );
};

export default App;
