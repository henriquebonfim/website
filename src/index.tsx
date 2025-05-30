import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

/**
 * Entry point for the React application.
 * Renders the App component inside a StrictMode wrapper.
 * Ensures accessibility and performance best practices.
 */
const rootElement = document.getElementById('root') as HTMLDivElement | null;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Root element not found. App not mounted.');
}
