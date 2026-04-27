import { defaultLocale, loadCatalog, locales } from '@/shared/i18n/lingui';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const savedLocale = localStorage.getItem('locale');
const initialLocale = savedLocale && savedLocale in locales ? savedLocale : defaultLocale;

await loadCatalog(initialLocale);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </StrictMode>
);
