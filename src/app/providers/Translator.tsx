import { useRootContext } from '#/shared/hooks';
import { dynamicLoadMessages } from '#/shared/i18n';
import { Loading } from '#/shared/ui';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { type FC, type ReactNode, useEffect, useState } from 'react';

/**
 * TranslatorProvider provides translation context to its children.
 * Dynamically loads translation messages based on the current locale.
 * @param props.children - Components to render within the provider
 * @returns JSX.Element
 */
const TranslatorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { locale } = useRootContext();

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        await dynamicLoadMessages(locale);
        if (isMounted) setIsReady(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        if (isMounted) setHasError(true);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, [locale]);

  if (hasError) {
    return (
      <article className="prose flex h-screen w-full flex-col items-center justify-center text-center">
        <p>Failed to load translations</p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Retry
        </button>
      </article>
    );
  }

  if (isLoading && !isReady) return <Loading overlay size="md" />;

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};

export default TranslatorProvider;
