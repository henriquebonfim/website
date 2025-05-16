import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import ErrorBoundary from "./shared/components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
