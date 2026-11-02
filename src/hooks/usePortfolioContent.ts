import { useTranslation } from "react-i18next";
import type { Language } from "../data/portfolio";

export function usePortfolioContent() {
  const { t, i18n } = useTranslation();
  const language: Language = i18n.resolvedLanguage === "en" ? "en" : "pt";
  return { t, language, content: t("content", { returnObjects: true }) };
}
