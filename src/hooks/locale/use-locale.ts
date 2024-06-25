import { getLocales } from "expo-localization";

export const useLocale = () => {
  const locale = getLocales().map((locale) => locale.languageTag);

  return {
    locale,
  };
};
