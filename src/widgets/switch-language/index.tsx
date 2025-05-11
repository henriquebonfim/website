import { dynamicLoadMessages, LOCALES } from "#/shared/i18n";

export function SwitchLanguage() {
  function changeLanguage(key: keyof typeof LOCALES) {
    dynamicLoadMessages(key);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        margin: "10px",
        gap: "5px",
      }}
    >
      {Object.entries(LOCALES).map(([key]) => (
        <img
          loading="lazy"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "40px",
          }}
          key={key}
          onClick={() => changeLanguage(key as keyof typeof LOCALES)}
          src={`/${key}.png`}
          alt={key}
        />
      ))}
    </div>
  );
}
