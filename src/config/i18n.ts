import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import enUS from "@/public/locales/en-US/en-us.json";
import ptBR from "@/public/locales/pt-BR/pt-br.json";

import { useLocale } from "@hooks/locale/use-locale";

const { locale } = useLocale();

export const languageResources = {
  "en-US": { translation: enUS },
  "pt-BR": { translation: ptBR },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  fallbackLng: "pt-BR",
  lng: locale[0],
  resources: languageResources,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

I18nManager.allowRTL(false);

export default i18n;
