import { type JSX, type ReactNode, useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicLoadMessages } from "#/shared/i18n";
import LoadingSpinner from "#/shared/components/LoadingSpinner";
import { useRootContext } from "#/shared/hooks";

/**
 * TranslatorProvider component that provides translation context to its children.
 * It dynamically loads the translation messages based on the current locale.
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The children components
 * @returns {JSX.Element} The TranslatorProvider component
 */
function TranslatorProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { locale } = useRootContext();

  useEffect(() => {
    async function setup() {
      try {
        setIsLoading(true);
        setHasError(false);
        await dynamicLoadMessages(locale);
        setIsReady(true);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    setup();
  }, [locale]);

  if (hasError) {
    return (
      <article className="flex h-screen w-full flex-col items-center justify-center prose">
        <p>Failed to load translations</p>
        <button onClick={() => window.location.reload()} className="btn btn-primary">
          Retry
        </button>
      </article>
    );
  }

  if (isLoading && !isReady) return <LoadingSpinner overlay size="md" />;

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

export default TranslatorProvider;
