"use client"
import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const LANGUAGES = { es, en };
const DEFAULT_LANG = "es";

export const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  t: (key) => key,
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang");
    if (stored && LANGUAGES[stored]) setLangState(stored);
  }, []);

  const setLang = useCallback((newLang) => {
    if (LANGUAGES[newLang]) {
      setLangState(newLang);
      localStorage.setItem("lang", newLang);
    }
  }, []);

  const t = useCallback(
    (key) => {
      return key
        .split(".")
        .reduce((obj, part) => (obj ? obj[part] : undefined), LANGUAGES[lang]) || key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
