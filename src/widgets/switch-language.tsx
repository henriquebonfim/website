import { LOCALES, SECTION_ITEMS } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import type { LocaleType } from '#/shared/types';
import type { FC } from 'react';

export const SwitchLanguage: FC = () => {
  const { setLocale } = useRootContext();

  return (
    <section id={SECTION_ITEMS.LANGUAGE} className="m-3 flex flex-row gap-3">
      {Object.entries(LOCALES).map(([key, value]) => (
        <img
          loading="lazy"
          className="h-9 w-9 cursor-pointer transition-all duration-300 hover:scale-130 active:scale-90"
          key={key}
          onClick={() => setLocale(key as LocaleType)}
          src={`/assets/i18n/${key}.png`}
          alt={value}
          title={value}
          width={333}
          height={333}
        />
      ))}
    </section>
  );
};
