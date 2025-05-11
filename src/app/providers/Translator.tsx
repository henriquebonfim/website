import { type ReactNode, useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicLoadMessages } from "#/shared/i18n";
import { useRootContext } from "../contexts/root";

interface Props {
  children: ReactNode;
}

function TranslatorProvider({ children }: Props) {
  const [isReady, setIsReady] = useState(false);
  const { locale } = useRootContext();

  useEffect(() => {
    async function setup() {
      await dynamicLoadMessages(locale);
      setIsReady(true);
    }
    setup();
  }, [locale]);

  if (!isReady) return null; // TODO: loading spinner

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

export default TranslatorProvider;
