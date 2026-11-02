import "i18next";
import type { pt } from "./locales/pt";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    returnNull: false;
    enableSelector: false;
    resources: { translation: typeof pt };
  }
}
