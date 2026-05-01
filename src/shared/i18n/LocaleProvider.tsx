import { useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { i18n } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, loadCatalog, locales } from './lingui';
import { SITE_CONFIG } from '@/shared/constants';

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const storedLocale = localStorage.getItem('locale');
    const fallbackLocale = storedLocale && storedLocale in locales ? storedLocale : defaultLocale;
    const currentLocale = lang && lang in locales ? lang : fallbackLocale;

    // 1. Redirect ONLY if no locale in URL
    if (!lang) {
      navigate(`/${currentLocale}${location.search}${location.hash}`, { replace: true });
      return;
    }

    // 2. Load catalog and activate
    const init = async () => {
      setIsReady(false);
      await loadCatalog(currentLocale);

      if (isCancelled) return;

      // 3. SEO & UX Side-effects
      document.title = i18n._(msg`Henrique Bonfim | Senior Software Engineer`);
      document.documentElement.lang = currentLocale;
      updateSeoLinks(currentLocale);

      localStorage.setItem('locale', currentLocale);
      setIsReady(true);
    };

    init();

    return () => {
      isCancelled = true;
    };
  }, [lang, navigate, location.search, location.hash]);

  if (!isReady) return null; // Or a sleek loading spinner

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

function updateSeoLinks(activeLocale: string) {
  const siteUrl = SITE_CONFIG.url;

  // Clean existing
  document
    .querySelectorAll('link[rel="canonical"], link[rel="alternate"]')
    .forEach((el) => el.remove());

  // Canonical
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = `${siteUrl}/${activeLocale}`;
  document.head.appendChild(canonical);

  // Hreflang alternates
  Object.keys(locales).forEach((locale) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = locale;
    link.href = `${siteUrl}/${locale}`;
    document.head.appendChild(link);
  });

  // x-default
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.hreflang = 'x-default';
  xDefault.href = `${siteUrl}/en`;
  document.head.appendChild(xDefault);
}
