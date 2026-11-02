import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { pt } from "./locales/pt";
import { en } from "./locales/en";

export const languageStorageKey = "portfolio.language";
export const resources = { pt: { translation: pt }, en: { translation: en } };

function syncDocument() {
  document.documentElement.lang =
    i18n.resolvedLanguage === "en" ? "en" : "pt-BR";
  document.title = i18n.t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
  const metadata = {
    'meta[property="og:title"]': i18n.t("meta.title"),
    'meta[property="og:description"]': i18n.t("meta.description"),
    'meta[property="og:locale"]': i18n.resolvedLanguage === "en" ? "en_US" : "pt_BR",
    'meta[property="og:image:alt"]': i18n.t("meta.imageAlt"),
    'meta[name="twitter:title"]': i18n.t("meta.title"),
    'meta[name="twitter:description"]': i18n.t("meta.description"),
    'meta[name="twitter:image:alt"]': i18n.t("meta.imageAlt"),
  };
  Object.entries(metadata).forEach(([selector, content]) => {
    document.querySelector(selector)?.setAttribute("content", content);
  });
}

// Resources are bundled: changing language never requires a network request.
await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["pt", "en"],
    fallbackLng: "pt",
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: languageStorageKey,
      caches: ["localStorage"],
    },
  });

syncDocument();
i18n.on("languageChanged", syncDocument);

export default i18n;
