import { useTranslation } from "react-i18next";

const languages = [
  { value: "pt", label: "PT", lang: "pt-BR" },
  { value: "en", label: "EN", lang: "en" },
] as const;

export function PreferenceControls() {
  const { t, i18n } = useTranslation();

  return (
    <div className="preference-controls">
      <fieldset className="language-control">
        <legend className="sr-only">{t("ui.language")}</legend>
        {languages.map((language) => (
          <label className="language-option" key={language.value}>
            <input
              className="sr-only"
              type="radio"
              name="portfolio-language"
              value={language.value}
              checked={
                (i18n.resolvedLanguage === "en" ? "en" : "pt") ===
                language.value
              }
              onChange={(event) => {
                void i18n.changeLanguage(event.target.value);
              }}
            />
            <span lang={language.lang}>{language.label}</span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
