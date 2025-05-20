import { LOCALES } from "#/shared/constants";
import { useRootContext } from "#/shared/hooks";
import type { LocaleType } from "#/shared/types";

export function SwitchLanguage() {
  const { setLocale } = useRootContext();

  function changeLanguage(key: LocaleType) {
    setLocale(key);
  }

  return (
    <div className="m-3 flex flex-row gap-3">
      {Object.entries(LOCALES).map(([key, value]) => (
        <img
          loading="lazy"
          className="h-9 w-9 cursor-pointer transition-all duration-300 hover:scale-130 active:scale-90"
          key={key}
          onClick={() => changeLanguage(key as LocaleType)}
          src={`/${key}.png`}
          alt={value}
          title={value}
          width={333}
          height={333}
        />
      ))}
    </div>
  );
}
