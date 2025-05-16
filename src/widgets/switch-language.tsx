import { useRootContext } from "#/shared/hooks";
import { LOCALES } from "#/shared/i18n";

export function SwitchLanguage() {
  const { setLocale } = useRootContext();

  function changeLanguage(key: keyof typeof LOCALES) {
    setLocale(key);
  }

  return (
    <div className="m-3 flex flex-row gap-3">
      {Object.entries(LOCALES).map(([key, value]) => (
        <img
          loading="lazy"
          className="h-9 w-9 cursor-pointer transition-all duration-300 hover:scale-130 active:scale-90"
          key={key}
          onClick={() => changeLanguage(key as keyof typeof LOCALES)}
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
