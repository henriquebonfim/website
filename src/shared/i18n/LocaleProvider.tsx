import { SITE_CONFIG } from '@/shared/constants';
import { i18n } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { I18nProvider } from '@lingui/react';
import { useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { defaultLocale, loadCatalog, locales } from './lingui';

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

    // 1. Redirect ONLY if no locale in URL or invalid locale
    if (!lang || !(lang in locales)) {
      navigate(`/${currentLocale}${location.search}${location.hash}`, { replace: true });
      return;
    }

    // 2. Load catalog and activate
    const init = async () => {
      // Only set loading state if we're actually changing locales
      const isDifferentLocale = i18n.locale !== currentLocale;
      if (isDifferentLocale) {
        setIsReady(false);
      }

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
    // We intentionally exclude location.search and location.hash from dependencies
    // to avoid re-triggering catalog loading and UI blanking on every hash change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, navigate]);

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
