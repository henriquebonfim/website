import { LOCALES, SECTION_ITEMS } from '#/shared/constants';
import { useRootContext } from '#/shared/hooks';
import type { LocaleType } from '#/shared/types';
import type { FC } from 'react';

/**
 * Language switcher component for changing the app locale.
 * Renders a flag for each available locale.
 * @returns {JSX.Element} The language switcher UI.
 */
const ChangeLanguage: FC = () => {
  const { setLocale, locale } = useRootContext();

  /**
   * Handles locale change on flag click.
   * @param {LocaleType} locale - The locale to switch to.
   */
  const handleLocaleChange = (locale: LocaleType) => setLocale(locale);

  return (
    <section
      id={SECTION_ITEMS.LANGUAGE}
      className="m-3 flex flex-row gap-3"
      aria-label="Language Switcher"
    >
      {Object.entries(LOCALES).map(([key, value]) => {
        const isActive = locale === key;
        return (
          <button
            key={key}
            onClick={() => handleLocaleChange(key as LocaleType)}
            className={`h-9 w-9 cursor-pointer transition-all duration-300 hover:scale-130 focus:grayscale-0 active:scale-90`}
            aria-label={value}
            title={value}
            type="button"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
          >
            <img
              loading="lazy"
              src={`/assets/i18n/${key}.png`}
              alt={value}
              width={100}
              height={100}
              className={`object-cover hover:grayscale-0 ${isActive ? 'grayscale-0' : 'grayscale-100'} transition-all duration-300`}
            />
          </button>
        );
      })}
    </section>
  );
};

export default ChangeLanguage;
