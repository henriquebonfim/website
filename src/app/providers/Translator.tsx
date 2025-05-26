import { useRootContext } from '#/shared/hooks';
import { dynamicLoadMessages } from '#/shared/i18n';
import { Loading } from '#/widgets/loading-spinner';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { type FC, type ReactNode, useEffect, useState } from 'react';

/**
 * TranslatorProvider component that provides translation context to its children.
 * It dynamically loads the translation messages based on the current locale.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The TranslatorProvider component
 */
const TranslatorProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { locale } = useRootContext();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        await dynamicLoadMessages(locale);
        setIsReady(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [locale]);

  if (hasError) {
    return (
      <article className="prose flex h-screen w-full flex-col items-center justify-center">
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
